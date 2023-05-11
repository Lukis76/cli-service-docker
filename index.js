#!/usr/bin/env node

import { existsSync, readFileSync } from 'fs'
import utils from './src/utils/index.js'
import inquirer from './src/inquirer/index.js'
import getWay from './src/created/getWay/index.js'
const servicesFilePath = './micro_services.json'
///////////////////////////////////////////////////////////////

const createdGetWay = async () => {
  const answers = await inquirer.initlSelection()
  if (answers.optCreated === 'created getway') {
    const { nameGetWay } = await inquirer.inputNameGatWay()
    getWay.createdGetWay(nameGetWay)
  } else if (answers.optCreated === 'created micro service') {
    // comporvamos si existe el archivo de estructura
    // si no existe lo creamos
    utils.createdServiceFilePath(servicesFilePath)

    // extraemos el contenido del archivo
    const fileStruct = readFileSync(servicesFilePath)
    // parsiamos el contenido del file
    const struct = JSON.parse(fileStruct)
    // comprovamos si esxiste el folder con el nombre que setiamos al crear el struct de microservices al crear el getway
    const existGetWay = !existsSync(`./${struct?.getWay?.name}`)
    // si no existe lo mandamos a crearlo
    if (existGetWay) {
      const { nameGetWay } = await inquirer.inputNameGatWay()
      getWay.createdGetWay(nameGetWay)
    }
    // pedimos un nombre para el folder de microsrvicio
    // si no se proporcina nimguno lo volvemos arequeriar
    let message = undefined
    while (true) {
      const nameService = await inquirer.inputNameMicroService(message)
      if (nameService.nameMicroService === 'None') {
        message = 'None'
      } else {
        const folderExist = !existsSync(`./${nameService.nameMicroService}`)
        if (folderExist) {
          break
        } else {
          message = 'duplicado'
        }
      }
    }
    // en esta parte es en doonde comensamos a crear el microservicio
  }
}

createdGetWay()
