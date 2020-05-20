const { gql } = require('apollo-server');

const typeDefs = gql`
  type Person {
    name: String!
    tree_id: String!
    bio: String
  }
  
  type Mutation {
    addPerson(name: String!, tree_id: String!): Person
    deletePerson(tree_id: String!, name: String): Person
    updateBio(name: String, bio: String!): Person @cacheControl(maxAge: 10)
  }

  type Query {
    getPeople: [Person]
    getPerson(name: String!): Person
  }`;

module.exports = typeDefs;
