import ApolloClient from 'apollo-boost';

export default new ApolloClient({ uri: process.env.APOLLO_CLIENT || 'http://localhost:4000/graphql'});