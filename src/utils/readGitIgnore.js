import { writeFileSync, existsSync, readFileSync } from 'fs'

export default () => {
  if (!existsSync('.gitignore')) {
    writeFileSync('./.gitignore', 'node_modules\n.env\n micro_services.json')
  } else {
    const gitignore = readFileSync('./.gitignore', 'utf8')
    if (!gitignore.includes('micro_services.json')) {
      writeFileSync('./.gitignore', gitignore + '\n micro_services.json')
    }
  }
}
