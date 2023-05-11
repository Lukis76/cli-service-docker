import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'

export default (answers) => {
  // creamos escructura de carpetas del micro servicio
  const serviceFolder = resolve(process.cwd(), answers.serviceName)

  utils.createdServiceFilePath(servicesFilePath)
  utils.readGitIgnore()
  utils.readJsonServices(servicesFilePath, answers.serviceName)

  mkdirSync(serviceFolder)
  writeFileSync(join(serviceFolder, 'index.js'), '')
  writeFileSync(join(serviceFolder, 'package.json'), '{}')
  writeFileSync(join(serviceFolder, 'package-lock.json'), '{}')

  const srcFolder = join(serviceFolder, 'src')
  mkdirSync(srcFolder)

  writeFileSync(join(srcFolder, 'server.js'), '')

  const controllerFolder = mkdirSync(join(srcFolder, 'controllers'))
  writeFileSync(join(controllerFolder, 'allFilms.js'), '')
  writeFileSync(join(controllerFolder, 'createFilm.js'), '')
  writeFileSync(join(controllerFolder, 'index.js'), '')

  const dataFolder = mkdirSync(join(srcFolder, 'data'))
  writeFileSync(join(dataFolder, 'createdFilm.js'), '')
  writeFileSync(join(dataFolder, 'films.json'), '')
  writeFileSync(join(dataFolder, 'index.js'), '')
  writeFileSync(join(dataFolder, 'listFilms.js'), '')

  const middlewareFolder = mkdirSync(join(srcFolder, 'middlewares'))
  writeFileSync(join(middlewareFolder, 'filmValidation.js'), '')
  writeFileSync(join(middlewareFolder, 'index.js'), '')

  const routeFolder = mkdirSync(join(srcFolder, 'routes'))
  writeFileSync(join(routeFolder, 'index.js'), '')

  const helpFolder = mkdirSync(join(srcFolder, 'helpers'))
  writeFileSync(join(helpFolder, 'index.js'), '')

  const utilFolder = mkdirSync(join(srcFolder, 'utils'))
  writeFileSync(join(utilFolder, 'catchedAsync.js'), '')
  writeFileSync(join(utilFolder, 'index.js'), '')
  writeFileSync(join(utilFolder, 'response.js'), '')

  const errorFolder = mkdirSync(join(utilFolder, 'errors'))
  writeFileSync(join(errorFolder, 'index.js'), '')

  console.log('La estructura del servicio ha sido creada con éxito!')
}
