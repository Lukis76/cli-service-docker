import inquirer from 'inquirer'

export default async () => {
  console.clear()
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'nameGetWay',
      message: 'Que nombre quieres ponerle a tu getway?',
      default: 'getway',
    },
  ])
}
