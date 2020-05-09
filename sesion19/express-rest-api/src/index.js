require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import logger from './logger'

const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
  logger.info('Hello World with winston')
  res.send('Hello World with express')
})

app.listen(3000)