export default `
const express = require('express')\n
const morgan = require('morgan')\n
const addMicroService = require('./src/microServices')\n
const JSONServices = require('../micro_services.json')\n\n
export const server = express()\n
server.use(morgan('dev'))\n
server.use(express.json())\n\n
addMicroService(server, JSONServices)\n\n
server.use('*', (_, res) => {\n\t
  res.status(404).send('Not Found')\n
})\n\n
const PORT = process.env.PORT || 8000\n
server.listen(PORT, () => {\n\t
  console.log(\`Server is listening on port \${PORT}\`)\n
})\n
`
