const resolvers = {

  Query: {
    getUsers: async (parent, args, context) => {
      return context.dataSources.userAPI.getAllUsers()
    }
  },
  Mutation: {
    signup: async (_, { name, email, password }, { dataSources }) => {
      return dataSources.userAPI.createUser({ name, email, password })
    }
  }
}

module.exports = resolvers