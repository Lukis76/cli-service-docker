import inquirer from 'inquirer'



export default async () => {
  console.clear()
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'nameGetWay',
      message: 'Que quieres hacer?',
      default: 'getway',
    },
  ])
}
