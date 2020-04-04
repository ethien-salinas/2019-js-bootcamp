require('dotenv').config()
import logger from './logger'
import { sign, verify } from 'jsonwebtoken'

const token = sign({ name: 'Ethien Salinas' },
  process.env.JWT_SECRET, { expiresIn: '1h' }
)
logger.debug(`token: ${token}`)

verify(token, process.env.JWT_SECRET, function (err, decoded) {
  if (err) logger.error(err)
  logger.info(JSON.stringify(decoded))
});
