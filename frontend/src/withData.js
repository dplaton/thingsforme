import ApolloClient from "apollo-boost";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function createClient() {
    console.log(`Backend running at ${backendUrl}`);
    return new ApolloClient({
        uri: backendUrl
    });
}

export default createClient;
