import ApolloClient from 'apollo-boost';

export default new ApolloClient(process.env.NODE_ENV === 'production' ? 
    { uri: 'https://middle-earth-server.herokuapp.com/graphql' } 
    : {uri: 'http://localhost:4000/graphql'}
);