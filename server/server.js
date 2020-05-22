const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config()
require('./config');

// import models
const { Person } = require('./models/person');

// Import GraphQL components
const typeDefs = require('./schema')
const resolvers = require('./resolvers')


// Set up Express server
const server = new ApolloServer({ typeDefs, resolvers })
const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready on port: ${process.env.PORT || 4000}`)
);


