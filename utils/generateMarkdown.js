// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
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

## Description
${data.description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Badges](#Badges)
- [Features](#Features)
- [How to Contribute](#How-to-Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation 
${data.installation}

## Usage 
${data.usage}

## Credits 
${data.credits}

## License 

## Badges

## Features
${data.features}

## How to Contribute
${data.contribute}

## Tests

## Questions
Github username: ${data.git}  
Link to Github: (https://github.com/${data.git})  

Email: ${data.email}
Instructions on how to contact: ${data.emaili}  
`;
}

module.exports = generateMarkdown;
