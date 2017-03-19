import { ApolloClient, createNetworkInterface } from "react-apollo";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "https://api.graph.cool/simple/v1/cj0a7cyexnnmr0156pvpoy9h7"
  })
});

export default client;
