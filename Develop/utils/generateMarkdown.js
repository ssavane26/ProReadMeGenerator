// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)]`
  }
  if (license === "Apache 2.0"){
    return `[![License: MIT](https://img.shields.io/badge/License-Apache2.0-red.svg)]`
  }
  if (license === "Mozilla Public License 2.0"){
    return `[![License: MIT](https://img.shields.io/badge/License-MozillaPublicLicense2.0-red.svg)]`
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return `(https://opensource.org/licenses/MIT)`
  }
  if (license === "Apache 2.0"){
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "GPL 3.0"){
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === "BSD 3"){
    return `(https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (license === "none"){
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT") {
    return `# License`
  }
  if(license === "Apache 2.0") {
    return `# License`
  }
  if(license === "GPL 3.0") {
    return `# License`
  }
  if(license === "BSD 3") {
    return `# License`
  }
  else if (license ===  "Unlicensed"){
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (
     `# ${data.Title}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  # Description
  ${data.Description}
  # Table of Contents
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Tests](#Tests)
    - [Questions](#Questions)
    - [Contributing](#Contributing)
  # Installation
  ${data.Command}
  # Usage
  ${data.Use}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  # Contributions
  ${data.Contribution}
  # Tests
  ${data.Test}
  # Questions
  Reach out at:
  <a href='https://github.com/${data.username}'>GitHub</a> or by email @ ${data.Email}
  `);
  
  }


module.exports = generateMarkdown;
