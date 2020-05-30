import { gql } from "apollo-server"

export default gql`
  type Query {
    signin(email: String, password: String): String
    books: [Book]
  }
  type Mutation {
    signup(name: String, email: String, password: String): User
    saveBook(title:String, imgUrl:String, amountSold:Int): Book
  }
  type User {
    id: ID
    name: String
    email: String
  }
  type Book {
    id: ID
    title: String
    imgUrl: String
    amountSold: Int
  }
`