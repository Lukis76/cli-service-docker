import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'
import write from './write/index.js'

export default (getWayName) => {
  const existGetWay = !existsSync(`./${getWayName}`)

  // TODO: add micro-service.json ya que es la primera ves que se crea el getway
  // TODO: pero si ya existe reescrivirlo

  if (existGetWay) {
    // resolvemos la ruta donde se creara el getway
    const getWayFolder = resolve(process.cwd(), getWayName)
    //creamos el getway con el nombre insertamos
    mkdirSync(getWayFolder)
    // insertamos el package.json con sus dependencias basicas
    writeFileSync(join(getWayFolder, 'package.json'), write.packageJson)
    // creamos un index.js don de iniciualizara nuestro getway
    writeFileSync(join(getWayFolder, 'index.js'), write.serverGetWay)
    //creamos el archivo DockerFile
    writeFileSync(join(getWayFolder, 'Dockerfile'), write.dockerFile)
    // creamos el archivo .dockerignore
    writeFileSync(join(getWayFolder, '.dockerignore'), write.dockerIgnore)
    // creamos una ruta para crear el src dentro de nuestro folder de getway
    const srcFolder = join(getWayFolder, 'src')
    // creamos nuestro folder src dentro del getway
    mkdirSync(srcFolder)
    //resolvemos la ruta de nuestro src para crear una carpeta microServices en el src de nuestro getway
    const servicesFolder = join(srcFolder, 'microServices')
    // creamos nuestro folder microServices dentro del getway/src/
    mkdirSync(servicesFolder)
    // creamos la estructura basica en donde estaran las rutas de nuestro getway
    writeFileSync(join(servicesFolder, 'index.js'), write.fnMicroService)
  }
}
