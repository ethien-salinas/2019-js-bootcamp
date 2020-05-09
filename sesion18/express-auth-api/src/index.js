require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import auth from './routes/auth'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log(req.headers)
  res.send('*** Express is running ***')
})

app.use('/login', auth)

app.listen(port, () => {
  console.log(`🤘🏻😎 Server running on port:${port}`)
})