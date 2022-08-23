const { default: inquirer } = require("inquirer");

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
        message: 'Enter Your GitHub username',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'Enter Email?',
      },
      {
        type: 'input',
        name: 'Name',
        message: 'Enter Project Name',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Enter Project Description',
      },
      {
        type: 'input',
        name: 'Username',
        message: 'Enter Your GitHub Username!',
      },
      {
        type: 'input',
        name: 'Command',
        message: 'Enter Desired Command To Install Dependencies!',
      },
      {
        type: 'input',
        name: 'Run',
        message: 'Enter Command To Run Tests!',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Choose Your License!',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'none']
      },
      {
        type: 'input',
        name: 'Contribution',
        message: 'How can others contribute to your project.',
      },
    ])

// TODO: Create a function to write README file
.then((data) => {
  const fileName = generate(data)
  writeToFile(fileName, data)
  console.log('README Created!')
  
 

 
   
    

   })
}
 

// Function call to initialize app
init();


// Function call to initialize app
init();
