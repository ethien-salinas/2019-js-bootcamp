export default {
  Query: {
    login: async (_, { email, password }, { dataSources }) =>
      await dataSources.authAPI.getToken({ email, password }),
    isValidToken: async (_, { token }, { dataSources }) =>
      await dataSources.authAPI.verifyToken(token),
    person: (_, { id }, { dataSources }) =>
      dataSources.personAPI.getPerson(id),
    persons: async (_, __, { dataSources, token }) =>
      await dataSources.authAPI.verifyToken(token)
      && dataSources.personAPI.getAllPerson()
  },

  Mutation: {
    signup: async (_, { name, email, password }, { dataSources }) => {
      return dataSources.userAPI.createUser({ name, email, password })
    }
  }
}