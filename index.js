// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
// const questions = [];
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Tell us about your project. For example, what was your motivation, why did you build it, what problem did it solve, and what did you learn?',
      },
      {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL) v3', 'Mozilla Public License 2.0', 'BSD 3-Clause License'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
  ])
  .then((inquirerData) => {
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    const filename = `README.md`;

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
fs.writeFile(filename, generateMarkdown(inquirerData, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
