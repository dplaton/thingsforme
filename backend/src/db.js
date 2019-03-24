const { Prisma } = require("prisma-binding");

/* eslint-disable no-undef */
// This is the Prisma database (i.e. our backend)
const db = new Prisma({
    typeDefs: "src/generated/prisma.graphql",
    endpoint: process.env.PRISMA_ENDPOINT,
    debug: false
});

module.exports = db;
