export default {
  Query: {
    signin: async (_, { email, password }, { dataSources }) => {
      return await dataSources.authAPI.getToken({ email, password })
    }
  },

  Mutation: {
    signup: async (_, { name, email, password }, { dataSources }) => {
      return dataSources.userAPI.createUser({ name, email, password })
    }
  }
}