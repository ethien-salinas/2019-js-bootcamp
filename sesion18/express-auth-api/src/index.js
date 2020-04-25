import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req.headers)
    res.send('*** Express is running ***')
})
app.post('/login', (req, res) => {
    console.log(req.body.key)
    res.status(500).send('Error en el servidor')
})

app.listen(port, () => {
    console.log(`Server running on port:${port}`)
})