const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'ala bala portocala de la server'
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `Userul a fost inregistrat pentru ${req.body.email}`
  })
})

const port = process.env.PORT || 8081
app.listen(port, function () {
  console.log('Server listening on port ' + port)
})
