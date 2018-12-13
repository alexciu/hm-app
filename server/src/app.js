require('rootpath')()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const history = require('connect-history-api-fallback')
const jwt = require('./_helpers/jwt')
const errorHandler = require('./_helpers/error-handler')

const app = express()

// app.use(history()) // poate nu trebuie :)
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// use JWT auth to secure the api
app.use(jwt())

// api routes
app.use('/', require('./users/users.controller'))

// global error handler --> define error-handling middleware last, after other app.use() and routes calls
app.use(errorHandler)

// app.get('/status', (req, res) => {
//   res.send({
//     message: 'ala bala portocala de la server'
//   })
// })

// app.post('/register', (req, res) => {
//   res.send({
//     message: `Userul a fost inregistrat pentru ${req.body.email}`
//   })
// })

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 8081
app.listen(port, function () {
  console.log('Server listening on port ' + port)
})

// const port = process.env.PORT || 8081
// app.listen(port, function () {
//   console.log('Server listening on port ' + port)
// })
