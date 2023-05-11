

export default `
const express = require('express')
const morgan = require('morgan')

const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.use(require('./routes'))

server.use('*', (req, res) => {
  res.status(404).send('Not Found')
})

server.use((err, req, res, next) => {
  // console.error(err)
  res.status(err.statusCode || 500).send({
    status: err.statusCode || 500,
    error: true,
    message: err.message,
  })
})

module.exports = server
`