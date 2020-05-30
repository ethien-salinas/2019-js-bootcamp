import { DataSource } from 'apollo-datasource'
import { hash } from 'bcrypt'

const saltRounds = 10

export default class UserAPI extends DataSource {

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
      password: await hash(password, saltRounds)
    })
    return result
  }

  async getAllUsers() {
    const result = await this.store.Users.findAll()
    return result
  }

}