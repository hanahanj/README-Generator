// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== null){
   var licenseInputString = `https://img.shields.io/badge/license-${license}-blue.svg`
  
   var licenseOutputString = licenseInputString.split('').map(char => (char === ' ' ? '%20' : char)).join(''); 
   console.log(licenseOutputString);

    return `![GitHub license](`+licenseOutputString+`)`;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// add to table of contents 



//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Title
  ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

 
  ## Table of Contents
  [Installation] (#installation)

   
  # ${data.github}
  # ${data.email}



`;
}

module.exports = generateMarkdown;
