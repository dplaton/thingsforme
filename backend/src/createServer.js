const { GraphQLServer } = require("graphql-yoga");
const db = require("./db");

module.exports = function createServer() {
    // This is our GraphQL server, which serves as a backend for our app
    return new GraphQLServer({
        typeDefs: "src/schema.graphql",
        resolvers: {},
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        // this context is passed through the resolver chain.
        // anything that we put here can be used in a resolver, and this means we can inject our DB here.
        context: req => ({ ...req, db })
    });
};
