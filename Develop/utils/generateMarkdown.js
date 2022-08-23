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
