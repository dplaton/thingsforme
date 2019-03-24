require("dotenv").config();

const createServer = require("./createServer");

const graphqlServer = createServer();

graphqlServer.start(data => {
    console.log(`Server running on port ${data.port}`);
});
