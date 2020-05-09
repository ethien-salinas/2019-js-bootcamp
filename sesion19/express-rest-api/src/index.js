require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import logger from './logger'
import user from './routes/user'
import authentication from './routes/authentication'
import createStore from './persistence/connection'

const app = express()
const store = createStore()

app.use(bodyParser.json())
app.set('store', store)

app.get('/', function (req, res) {
  logger.info(req)
  res.send('Express REST API v1')
})

app.use('/login', authentication)
app.use('/user', user)

app.listen(3000)