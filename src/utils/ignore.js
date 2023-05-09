import { writeFileSync, existsSync, readFileSync } from 'fs'

export const ignore = () => {
  if (!existsSync('.gitignore')) {
    writeFileSync('./.gitignore')
  } else {
    const gitignore = readFileSync('./.gitignore', 'utf8')
    writeFileSync('./gitignore', gitignore + '\n micro_services.js')
  }
}
