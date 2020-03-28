const { DataSource } = require('apollo-datasource')

class UserAPI extends DataSource {

  constructor({ store }) {
    super()
    this.store = store
  }
  initialize(config) {
    this.context = config.context
  }

  async createUser({ name, email, password }) {
    const result = await this.store.Users.create({
      name,
      email,
      password
    })
    return result
  }
}
module.exports = UserAPI