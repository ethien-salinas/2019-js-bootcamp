import { gql } from 'apollo-server'

export default gql`
    type Query{
      login(email: String, password: String): String
      isValidToken(token:String):Boolean
    }
    type Mutation {
      signup(name: String, email: String, password:String): User
    }
    type User{
      id: ID
      name: String
      email: String
    }
`