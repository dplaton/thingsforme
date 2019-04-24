require("dotenv").config();
const db = require("./db");
const createServer = require("./createServer");
require("dotenv").config();

const graphqlServer = createServer();

graphqlServer.use(async (req, res, next) => {
    if (!req.userId) {
        return next();
    }
    try {
        const theUser = await db.query.user(
            {
                where: {
                    id: req.userId
                }
            },
            "{id, roles, email, name}"
        );
        console.log(`The user ${theUser}`);
        req.user = theUser;
    } catch (e) {
        console.log(e);
    }
    next();
});

graphqlServer.start(data => {
    console.log(`Server running on port ${data.port}`);
});
