const { gql } = require('apollo-server');

const typeDefs = gql`
  type Person {
    name: String!
    tree_id: String!
    bio: String
  }
  
  type Mutation {
    addPerson(name: String!, tree_id: String!): Person
    deletePerson(name: String!): Person
    updateBio(name: String, bio: String!): Person
  }

  type Query {
    getPeople: [Person]
    getPerson(name: String!): Person
  }`;

module.exports = typeDefs;
