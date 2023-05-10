import { writeFileSync, existsSync } from 'fs'

export default (servicesFilePath) => {
  if (!existsSync(servicesFilePath)) {
    writeFileSync(
      servicesFilePath,
      `{\n\t"getway": {\n\t\t"port": 8000\n\t},\n\t"services": [\n\t]\n}`
    )
  }
}
