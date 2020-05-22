import ApolloClient from 'apollo-boost';

export default new ApolloClient({
    uri: process.env.NODE_ENV === 'production' ? 'http://middle-earth-trees.herokuapp.com/graphql' : 'http://localhost:4000/graphql',
});