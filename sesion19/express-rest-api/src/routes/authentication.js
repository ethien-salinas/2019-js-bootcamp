import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'
const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log(`datetime: ${Date.now()}`)
  next()
})

router.post('/', async (req, res) => {
  const { email, password } = req.body
  const store = req.app.get('store')
  const user = await store.Users.findOne({
    where: { email }
  })
  if (user && (email === user.email && await compare(password, user.password))) {
    const tokenData = {
      email,
      roles: user.role
    }
    const jwt = sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.send({ jwt })
    res.end()
  } else {
    res.status(400).send({ error: "¿Qué onda con esos datos? 😞" })
    res.end()
  }
})

module.exports = router