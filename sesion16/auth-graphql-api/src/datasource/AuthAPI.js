import { DataSource } from 'apollo-datasource'
import { sign, verify } from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { AuthenticationError, ApolloError } from 'apollo-server'
import logger from '../logger'

export default class AuthAPI extends DataSource {

  constructor({ store }) {
    super()
    this.store = store
  }
  initialize(config) {
    this.config = config.context
  }

  async getToken({ email, password }) {
    logger.info(`[getToken] email: ${email}`)
    const user = await this.store.Users.findOne({
      where: { email }
    })
    logger.info(`[getToken] user found: ${JSON.stringify(user)}`)
    if (user && (email === user.email && await compare(password, user.password))) {
      const tokenData = {
        email: email,
        roles: ['copywriter'] //TODO: read from DB
      }
      return sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1h' })
    }
    logger.error(`[getToken] invalid credentials, email: ${email}, password: ${password}`)
    throw new AuthenticationError('Invalid credentials')
  }

  async verifyToken(token) {
    let isValidToken = false
    if (!token) {
      logger.error('[verifyToken] missing token')
      throw new ApolloError('Missing token', 'MISSING_TOKEN')
    }
    return verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        logger.error(`[verifyToken] invalid token: ${token}`)
        throw new ApolloError('Invalid token', 'INVALID_TOKEN')
      }
      return !isValidToken
    })
  }

}