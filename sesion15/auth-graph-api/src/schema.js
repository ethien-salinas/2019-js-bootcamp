const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    getUsers: [User]
  }
  type Mutation {
    signup(name: String, email: String, password: String): User
  }
  type User{
    id: ID,
    name: String,
    email: String
  }
`
module.exports = typeDefs