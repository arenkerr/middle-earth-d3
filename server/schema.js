const { gql } = require('apollo-server');

const typeDefs = gql`
  type Person {
    name: String
    tree_id: String
  }
  
  type Mutation {
    addPerson(name: String!, tree_id: String!): Person
  }

  type Query {
    getPeople: [Person]
  }`;

module.exports = typeDefs;
