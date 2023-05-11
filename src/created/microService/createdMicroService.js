import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'
import write from './write/index.js'
import dockerIgnore from '../writeDockerIgnore.js'

export default (answers) => {
  // creamos escructura de carpetas del micro servicio
  const serviceFolder = resolve(process.cwd(), answers.serviceName)

  utils.createdServiceFilePath(servicesFilePath)
  utils.readGitIgnore()
  utils.readJsonServices(servicesFilePath, answers.serviceName)

  mkdirSync(serviceFolder)
  writeFileSync(join(serviceFolder, 'index.js'), write.initialIndex)
  writeFileSync(join(serviceFolder, 'package.json'), write.packageJson)
  writeFileSync(join(serviceFolder, 'Dockerfile'), write.dockerFile)
  writeFileSync(join(serviceFolder, '.dockerignore'), dockerIgnore)

  const srcFolder = join(serviceFolder, 'src')
  mkdirSync(srcFolder)

  writeFileSync(join(srcFolder, 'server.js'), write.server)

  const controllerFolder = mkdirSync(join(srcFolder, 'controllers'))
  writeFileSync(join(controllerFolder, 'index.js'), write.controller)

  const dataFolder = mkdirSync(join(srcFolder, 'data'))
  writeFileSync(join(dataFolder, 'index.js'), write.data)

  const middlewareFolder = mkdirSync(join(srcFolder, 'middlewares'))
  writeFileSync(join(middlewareFolder, 'index.js'), write.middleware)

  const routeFolder = mkdirSync(join(srcFolder, 'routes'))
  writeFileSync(join(routeFolder, 'index.js'), write.routes)

  const helpFolder = mkdirSync(join(srcFolder, 'helpers'))
  writeFileSync(join(helpFolder, 'index.js'), write.helps)

  const utilFolder = mkdirSync(join(srcFolder, 'utils'))
  writeFileSync(join(utilFolder, 'catchedAsync.js'), write.catchedAsync)
  writeFileSync(join(utilFolder, 'index.js'), write.utils)
  writeFileSync(join(utilFolder, 'response.js'), write.response)

  const errorFolder = mkdirSync(join(utilFolder, 'errors'))
  writeFileSync(join(errorFolder, 'index.js'), write.error)

  console.log('La estructura del servicio ha sido creada con éxito!')
}
