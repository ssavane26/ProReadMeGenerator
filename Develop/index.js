
// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// Created an array of questions for user input, alongside a function to initialize app
function init () {
     inquirer.prompt([
      {
        type: 'input',
        name: 'Name',
        message: 'Enter Your GitHub username:',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'Enter Email?:',
      },
      {
        type: 'input',
        name: 'Title',
        message: 'Enter Project Title:',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Enter Project Description (Please):',
      },
      {
        type: 'input',
        name: 'Use',
        message: 'Enter how this application should be used!:',
      },
      {
        type: 'input',
        name: 'Command',
        message: 'Enter Desired Command To Install Dependencies!:',
      },
      {
        type: 'input',
        name: 'Test',
        message: 'Enter Command To Run Tests!:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose Your License!:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'Unlicensed']
      },
      {
        type: 'input',
        name: 'Contribution',
        message: 'How can others contribute to your project?:',
      },
    ])

  .then((data) => {
        
    const fileName = generateMarkdown(data)
    writeToFile(fileName, data)
    console.log('README.md Created!')
   })

  }

  // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync('README.md', fileName)
  }


// Function call to initialize app
init();
