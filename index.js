// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of prompts to generate content for README
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
        name: 'usage',
        message: 'Insert a link to a usage demonstration. This could be an image or video',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide some information regarding how people might contribute to this project.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username? Ex: username1',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email? Ex. email@email.com',
      },
  ])
  .then((inquirerData) => {
   
    const filename = `README.md`;

//writes README
fs.writeFile(filename, generateMarkdown(inquirerData, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

function init() {}


init();
