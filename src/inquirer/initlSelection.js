import inquirer from 'inquirer'

export default async () => {
  console.clear()
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'optCreated',
      message: 'Que quieres hacer?',
      choices: [
        'created getway',
        'created micro service',
        'created controller',
      ],
    },
  ])
}
