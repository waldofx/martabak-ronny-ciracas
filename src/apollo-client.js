import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
    uri: "https://martabak-ronny.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret": "uGFMkg8a7wk1LwbmCtghWmUSMIAhKlVHQ1sJG5RrlvtvY8dBxy6l7xNB2Qr4laA4",
    },
});

const wsLink = new WebSocketLink({
    uri: "wss://martabak-ronny.hasura.app/v1/graphql",
    options: {
        reconnect: true,
        connectionParams: {
            headers: {
                "x-hasura-admin-secret": "uGFMkg8a7wk1LwbmCtghWmUSMIAhKlVHQ1sJG5RrlvtvY8dBxy6l7xNB2Qr4laA4",
            },
        },
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === "OperationDefinition" && definition.operation === "subscription";
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;
