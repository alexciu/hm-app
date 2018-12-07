const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 8081
app.listen(port, function () {
  console.log('Server listening on port ' + port)
})
