
const { createProxyMiddleware } = require('http-proxy-middleware')


// Función para agregar microservicio

module.exports = (app, JSONServices) => {
	
  const microServices = JSON.parse(JSONServices).services
	
  microServices.forEach((service) => {
		
    app.use(
			
      service.endpoint,
			
      createProxyMiddleware({
				
        target: service.target + ':' + service.port,
				
        changeOrigin: true,
			
      })
		
    )
	
  })

}

