export default `
const express = require('express')\n
const morgan = require('morgan')\n\n

const service = express()\n\n

service.use(morgan('dev'))\n
service.use(express.json())\n\n

// micro services\n
require('./src/microService')\n\n

const PORT = process.env.PORT || 8000\n\n

service.listen(PORT, () => {\n\t
  console.log(\`service running on port \${PORT}\`)\n
})\n
`
