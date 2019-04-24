const { forwardTo } = require("prisma-binding");

const Query = {
    users: forwardTo("db"),
    wishlists: forwardTo("db")
};

module.exports = Query;
