// finction add micro service
export default `
const { createProxyMiddleware } = require('http-proxy-middleware')\n\n
// Función para agregar microservicio\n
function addMicroservice(endpoint, target) {\n\t
  service.use(\n\t\t
    endpoint,\n\t\t\t
    createProxyMiddleware({\n\t\t\t
      target,\n\t\t\t
      changeOrigin: true,\n\t\t
    })\n\t
  )\n
}\n\n
`
