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
function renderLicenseLink(license) {
  if (license !== null){
    return `*[License](#license)`
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
// add to table of contents 
if (license !== null){
  return `## License
  This project is licenced under the ${license} License.`
}
}


//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  ## Title
  ${data.title}
  
  ## Description
  ${data.description}

 
  ## Table of Contents
  *[Installation] (#installation)
  *[Usage](#usage)
  ${renderLicenseLink(data.license)}
  *[Contributing](#contributing)
  *[Tests](#test)
  *[Questions](#questions)

 ## Usage
 ${data.usage}
 
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Contributing
  ${data.contributing}

  ## Questions
  If you have any question about the repo you can contact me via ${data.email}.
  You can also find more of my work at[${data.github}](https://github.com/${data.github}).



`;
}

module.exports = generateMarkdown;
