import { verify } from 'jsonwebtoken'
import logger from '../logger'

module.exports = (options) => {
  return (req, res, next) => {
    logger.info(req.body)
    let token = req.headers['authorization']
    if (!token) {
      const error = 'Es necesario el token de autenticación'
      logger.error(error)
      res.status(401).send({ error })
      return
    }
    verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        const error = 'Token inválido'
        logger.error(error)
        res.status(401).send({ error })
      } else {
        next()
      }
    })
  }
}