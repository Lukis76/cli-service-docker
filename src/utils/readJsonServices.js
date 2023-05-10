import { writeFileSync, readFileSync } from 'fs'

export default (servicesFilePath, serviceName) => {
  // created reference in file './micro_services.json'
  // const servicesFilePath = './micro_services.json'
  const services = readFileSync(servicesFilePath)
  const parseServices = JSON.parse(services)
  let maxPort = 8000
  if (parseServices.services.length) {
    const listPort = parseServices.services.map((s) => s.port)
    maxPort = Math.max(...listPort)
  } else {
    maxPort = parseServices.getway.port
  }
  parseServices.services.push({
    name: serviceName,
    port: (maxPort += 1),
  })

  writeFileSync(servicesFilePath, JSON.stringify(parseServices, null, 2))
}
