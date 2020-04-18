export default {
  Query: {
    login: async (_, { email, password }, { dataSources }) =>
      await dataSources.authAPI.getToken({ email, password })
  },

  Mutation: {
    signup: async(_, { name, email, password }, { dataSources }) => {
      return dataSources.userAPI.createUser({ name, email, password })
    }
  }
}