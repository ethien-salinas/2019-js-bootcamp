import express from 'express'
import { hash } from 'bcrypt'
import logger from '../logger'
import auth from '../middleware/auth'
const router = express.Router()

router.use((req, res, next) => {
  logger.info(req.headers)
  next()
}, auth())

const saltRounds = 10

router.post('/', async (req, res) => {
  const { name, email, password, role } = req.body
  logger.info(JSON.stringify({ name, email, role }))
  const store = req.app.get('store')
  const result = await store.Users.create({
    name,
    email,
    password: await hash(password, saltRounds),
    role
  })
  res.send({ result })
  res.end()
})

router.get('/', async (req, res) => {
  const store = req.app.get('store')
  const result = await store.Users.findAll({
    attributes: ['id', 'name', 'email', 'role']
  })
  logger.info(JSON.stringify({ result }))
  res.send({ result })
  res.end()
})

module.exports = router