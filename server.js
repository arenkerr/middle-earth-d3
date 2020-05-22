const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config()
require('./server/config');

// import models
const { Person } = require('./server/models/person');

// Import GraphQL components
const typeDefs = require('./server/schema')
const resolvers = require('./server/resolvers')


// Set up Express server
const server = new ApolloServer({ 
  introspection: true,
  playground: true,
  typeDefs, 
  resolvers 
})
const app = express();
app.use(cors());
server.applyMiddleware({ app });

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`🚀 Server ready on port: ${process.env.PORT || 4000}`)
);


