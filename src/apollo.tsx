import ApolloClient from 'apollo-boost';

export default new ApolloClient({ 
    uri: process.env.NODE_ENV === 'production' ? 
        process.env.REACT_APP_API_URL : 
        'http://localhost:4000/graphql'
});