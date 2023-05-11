
const express = require('express')

const morgan = require('morgan')

const addMicroService = require('./src/microServices')

const JSONServices = require('../micro_services.json')


export const server = express()

server.use(morgan('dev'))

server.use(express.json())


addMicroService(server, JSONServices)


server.use('*', (_, res) => {
	
  res.status(404).send('Not Found')

})


const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
	
  console.log(`Server is listening on port ${PORT}`)

})

