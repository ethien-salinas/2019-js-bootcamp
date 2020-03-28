require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const createStore = require('./persistence/connection')
const UserAPI = require('./datasources/UserAPI')

const store = createStore()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    userAPI: new UserAPI({ store })
  })
})
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url} 😎🤘🏻`)
})