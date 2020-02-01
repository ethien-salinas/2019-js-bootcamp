require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/login', (req, res) => {
  let email = req.body.email
  let password = req.body.password
  if(email !== 'ethien.salinas@gmail.com'){
    return res.status(404).send({err:'user not found'})
  }else if(email === 'ethien.salinas@gmail.com' && password === 'qwerty'){
    let token = jwt.sign(
      {id: '00369'},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
    )
    return res.status(200).send({
      auth: true,
      token,
      user: {
        id: '00369',
        name: 'Ethien Salinas',
        email,
        is_admin: false
      }
    })
  }
  return res.send({data:'Hello World!'})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))