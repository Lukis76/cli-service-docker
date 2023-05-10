// finction add micro service
export default `
const { createProxyMiddleware } = require('http-proxy-middleware')\n\n
// Función para agregar microservicio\n
module.exports = (app, JSONServices) => {\n\t
  const microServices = JSON.parse(JSONServices).services\n\t
  microServices.forEach((service) => {\n\t\t
    app.use(\n\t\t\t
      service.endpoint,\n\t\t\t
      createProxyMiddleware({\n\t\t\t\t
        target: service.target + ':' + service.port,\n\t\t\t\t
        changeOrigin: true,\n\t\t\t
      })\n\t\t
    )\n\t
  })\n
}\n
`
