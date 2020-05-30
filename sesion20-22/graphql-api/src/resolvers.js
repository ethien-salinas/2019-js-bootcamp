export default {
  Query: {
    signin: async (_, { email, password }, { dataSources }) => {
      return await dataSources.authAPI.getToken({ email, password })
    },
    books: async (_, __, { dataSources }) => {
      return dataSources.bookAPI.getAllBooks()
    }
  },

  Mutation: {
    signup: async (_, { name, email, password }, { dataSources }) => {
      return dataSources.userAPI.createUser({ name, email, password })
    },
    saveBook: async (_, { title, imgUrl, amountSold }, { dataSources }) => {
      return dataSources.bookAPI.createBook({ title, imgUrl, amountSold })
    }
  }
}