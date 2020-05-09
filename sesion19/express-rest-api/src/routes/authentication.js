import { sign } from 'jsonwebtoken'
const express = require('express')
const router = express.Router()

router.use((req, res, next)=>{
  console.log(`datetime: ${Date.now()}`)
  next()
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  if (email==='ethien.salinas@gmail.com' && password==='qwerty') {
    const tokenData = {
      email,
      roles: ['copywriter']
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