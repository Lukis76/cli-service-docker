export default `
const { Router } = require('express')
const controllers = require('../controllers')
const middelwares = require('../middlewares')

const router = Router()

// las sigiente rutas son a modo de ejemplo 
/*
router.get('/characters', controllers.allCharacters)
router.post('/character', middelwares.characterValidation, controllers.createCharacter)
*/

module.exports = router
`