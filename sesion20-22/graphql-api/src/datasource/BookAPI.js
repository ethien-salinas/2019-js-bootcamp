import { DataSource } from 'apollo-datasource'

const saltRounds = 10

export default class BookAPI extends DataSource {

  constructor({ store }) {
    super()
    this.store = store
  }
  initialize(config) {
    this.context = config.context
  }

  async createBook({ title, imgUrl, amountSold }) {
    const result = await this.store.Books.create({
      title, imgUrl, amountSold
    })
    return result
  }

  async getAllBooks() {
    const result = await this.store.Books.findAll()
    return result
  }

}