if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const jwt = require('express-jwt')
const cors = require('cors')

const app = express()
app.use(cors({credentials: true}))

app.use(jwt({
  secret: process.env.AUTH0_SECRET
}))


app.get('/', (req, res) => res.send({ msg: 'You are authorized!!!!' }))


app.listen(5000)
console.log('API is listening to port 5000')

