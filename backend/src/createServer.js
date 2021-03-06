const { GraphQLServer } = require("graphql-yoga");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const db = require("./db");

module.exports = function createServer() {
    // This is our GraphQL server, which serves as a backend for our app
    return new GraphQLServer({
        typeDefs: "src/schema.graphql",
        resolvers: {
            Query,
            Mutation
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        // this context is passed through the resolver chain.
        // anything that we put here can be used in a resolver, and this means we can inject our DB here.
        context: req => ({ ...req, db })
    });
};
