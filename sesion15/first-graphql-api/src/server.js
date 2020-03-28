const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query{
    books: [Book]
  }
`
const books = [
  {
    title: "Reconfiguracion Financiera",
    author: "Alejandro Saracho"
  },
  {
    title: "Juego de tronos",
    author: "George R. R. Martin"
  },
  {
    title: "La Guerra y la Paz",
    author: "León Tolstói"
  },
  {
    title: "El Origen",
    author: "Dan Brown"
  },
  {
    title: "No es lo que dices, sino cómo lo dices",
    author: "Michael Parker"
  },
  {
    title: "No es lo que dices, sino cómo lo dices",
    author: "Michael Parker"
  },
  {
    title: "Los cuatro acuerdos",
    author: "Miguel Ángel Ruiz Macías"
  },
]

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url} 🤘🏻`)
})