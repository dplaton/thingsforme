const { forwardTo } = require("prisma-binding");

const Query = {
    users: forwardTo("db"),
    wishlists: forwardTo("db"),
    wishlistItems: forwardTo("db"),

    wishlist: async function(parent, args, context, info) {
        const { id } = args;
        if (!id) {
            throw new Error(`Missing wishlist id`);
        }

        const wishlist = await context.db.query.wishlist(
            {
                where: {
                    id
                }
            },
            info
        );

        //TODO check permissions and ownership
        return wishlist;
    }
};

module.exports = Query;
