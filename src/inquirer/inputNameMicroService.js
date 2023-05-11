import inquirer from 'inquirer'

export default async (pregunta = undefined) => {
  let message =
    pregunta === 'duplicado'
      ? 'Proporciona otro un nombre de folder que no exista! (Required)'
      : pregunta === 'None'
      ? 'El nombre para el folder es requerido'
      : 'Que nombre quieres ponerle a tu servicio? (Required)'
  console.clear()
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'nameMicroService',
      message,
      default: 'None',
    },
  ])
}
