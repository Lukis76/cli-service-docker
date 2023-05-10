import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'
import write from './write/index.js'

export default (getWayName) => {
  const existGetWay = !existsSync(`./${getWayName}`)

  if (existGetWay) {
    const getWayFolder = resolve(process.cwd(), getWayName)
    mkdirSync(getWayFolder)
    writeFileSync(join(getWayFolder, 'index.js'), write.serverGetWay)


    const srcFolder = join(getWayFolder, 'src')
    mkdirSync(srcFolder)
    const servicesFolder = join(srcFolder, 'microServices')
    mkdirSync(servicesFolder)

    writeFileSync(join(servicesFolder, 'index.js'), write.fnMicroService)
  }
}
