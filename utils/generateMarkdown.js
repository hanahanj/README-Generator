//function produces a license badge link by pulling selection from prompts and creating link string
function renderLicenseBadge(license) {
  if (license !== null){
   var licenseInputString = `https://img.shields.io/badge/license-${license}-blue.svg`
  
   var licenseOutputString = licenseInputString.split('').map(char => (char === ' ' ? '%20' : char)).join(''); 
   console.log(licenseOutputString);

    return `![GitHub license](`+licenseOutputString+`)`;

  }
}


function renderLicenseLink(license) {
  if (license !== null){
    return `*[License](#license)`
  }
}


// adds a section to the TOC for the license 
function renderLicenseSection(license) {

if (license !== null){
  return `## License
  This project is licenced under the ${license} License.`
}
}


//Generates markdown for README
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

  ## Installation
  Install necessary packages to run applcation
  
  \`\`\`\`
  npm i inquirer
  \`\`\`\`

 ## Usage
 [Usage Demo](${data.usage})

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
