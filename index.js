// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'Project Title',
        message: 'What is your project called?',
      },
      {
        type: 'input',
        name: 'Project Description',
        message: 'Tell us about your project. For example, what was your motivation, why did you build it, what problem did it solve, and what did you learn?',
      },
      {
        type: 'checkbox',
        name: 'Table of Contents',
        message: 'Build a Table of Contents',
        choices: [
            { name: 'Installation' },
            { name: 'Usage' },
            { name: 'License' },
            { name: 'Contributing' },
            { name: 'Tests' },
            { name: 'Questions' },
            { name: 'Other' }
          ],
      },
      {
        type: 'list',
        message: 'What license are you using?',
        name: 'stack',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL) v3', 'Mozilla Public License 2.0', 'BSD 3-Clause License'],
      },
      {
        type: 'input',
        name: 'github Username ',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
  ])
  .then((data) => {
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    const filename = `README.txt`;

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
