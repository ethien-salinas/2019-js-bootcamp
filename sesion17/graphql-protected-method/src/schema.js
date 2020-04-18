import { gql } from 'apollo-server'

export default gql`
    type Query{
      login(email: String, password: String): String
      isValidToken(token:String): Boolean
      person(id: Int): Person
      persons: [Person]
    }
    type Mutation {
      signup(name: String, email: String, password:String): User
    }
    type User{
      id: ID
      name: String
      email: String
    }
    type Person {
      id: ID,
      first_name: String
      last_name: String
      email: String
      gender: String
      ip_address: String
    }
`