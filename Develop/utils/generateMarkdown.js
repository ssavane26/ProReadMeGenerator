// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "none":
      license = " ";
      return license
      break;
      case "MIT": 
      license = '<br />[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
      return license
      break;
      case "Apache 2.0":
        license = '<br />[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)]'
        return license
        break;
        case "GPL 3.0":
          license = '<br />[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
        return license
        break;
        case "BSD 3":
          license = '<br />[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)]'
          return license
          break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
