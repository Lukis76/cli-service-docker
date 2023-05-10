#!/usr/bin/env node

import inquirer from 'inquirer'
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'fs'
import { join, resolve } from 'path'
import utils from './src/utils/index.js'


const servicesFilePath = './micro_services.json'

// aquí puedes usar inquirer.prompt() o cualquier otro método de inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'serviceName',
      message: 'Que nombre le quieres dar a tu servicio:',
      default: 'default_service',
    },
  ])
  .then((answers) => {
    const serviceFolder = resolve(process.cwd(), answers.serviceName)

    utils.createdServiceFilePath(servicesFilePath)
    utils.readGitIgnore()
    utils.readJsonServices(servicesFilePath, answers.serviceName)


    
    mkdirSync(serviceFolder)
    writeFileSync(join(serviceFolder, 'index.js'), 'putito como estas?')
    writeFileSync(join(serviceFolder, 'package.json'), '{}')
    writeFileSync(join(serviceFolder, 'package-lock.json'), '{}')

    const srcFolder = join(serviceFolder, 'src')
    mkdirSync(srcFolder)
    mkdirSync(join(srcFolder, 'controllers'))
    mkdirSync(join(srcFolder, 'data'))
    mkdirSync(join(srcFolder, 'helpers'))
    mkdirSync(join(srcFolder, 'middlewares'))
    mkdirSync(join(srcFolder, 'routes'))
    writeFileSync(join(srcFolder, 'server.js'), '')
    mkdirSync(join(srcFolder, 'utils'))
    writeFileSync(join(srcFolder, 'utils', 'catchedAsync.js'), '')
    mkdirSync(join(srcFolder, 'utils', 'errors'))
    writeFileSync(join(srcFolder, 'utils', 'errors', 'index.js'), '')
    writeFileSync(join(srcFolder, 'utils', 'index.js'), '')
    writeFileSync(join(srcFolder, 'utils', 'response.js'), '')

    writeFileSync(join(srcFolder, 'controllers', 'allFilms.js'), '')
    writeFileSync(join(srcFolder, 'controllers', 'createFilm.js'), '')
    writeFileSync(join(srcFolder, 'controllers', 'index.js'), '')

    writeFileSync(join(srcFolder, 'data', 'createdFilm.js'), '')
    writeFileSync(join(srcFolder, 'data', 'films.json'), '')
    writeFileSync(join(srcFolder, 'data', 'index.js'), '')
    writeFileSync(join(srcFolder, 'data', 'listFilms.js'), '')

    writeFileSync(join(srcFolder, 'middlewares', 'filmValidation.js'), '')
    writeFileSync(join(srcFolder, 'middlewares', 'index.js'), '')

    writeFileSync(join(srcFolder, 'routes', 'index.js'), '')

    console.log('La estructura del servicio ha sido creada con éxito!')
  })
