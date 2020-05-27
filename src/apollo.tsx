import ApolloClient from 'apollo-boost';

export default new ApolloClient({ 
    uri: process.env.NODE_ENV === 'production' ? 
        process.env.APOLLO_CLIENT : 
        'http://localhost:4000/graphql'
});