const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Mutations = {
    async createUser(parent, args, context, info) {
        if (!args.email || !args.password || !args.name) {
            throw new Error(`Not enough arguments for creating the user`);
        }
        //TODO validate e-mail and password
        const email = args.email.toLowerCase();
        // TODO use a more complex salt
        const password = await bcrypt.hash(args.password, 10);

        const newUser = await context.db.mutation.createUser({
            data: {
                name: args.name,
                password,
                email
            }
        });

        //3. Generate JWT token
        const token = jwt.sign({ user: newUser.id }, process.env.APP_SECRET);
        //4. Set the cookie with the user
        context.response.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
        });
        return newUser;
    },

    async createWishlist(parent, args, context, info) {
        if (!args.name) {
            throw new Error("Cannot create a wishlist without a name");
        }
        const wishlist = await context.db.mutation.createWishlist(
            {
                data: {
                    ...args,
                    user: {
                        connect: {
                            id: "cjuphijgn4n930b95uq72smvp"
                        }
                    }
                }
            },
            info
        );

        console.log(`Created wishlist`, wishlist);
        return wishlist;
    },

    async signIn(parent, args, context, info) {
        const { email, password } = args;
        //1. Check if the user exists
        const theUser = await context.db.query.user({
            where: {
                email
            }
        });
        if (!theUser) {
            throw new Error(`Incorrect credentials`);
        }

        console.dir(theUser);
        //2. Check if the password is correct
        if (theUser.password !== password) {
            throw new Error(`Incorrect credentials`);
        }

        //3. Generate JWT token
        const token = jwt.sign({ user: theUser.id }, process.env.APP_SECRET);

        //4. Set the cookie with the user
        context.response.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
        });
        return theUser;
    }
};

module.exports = Mutations;
