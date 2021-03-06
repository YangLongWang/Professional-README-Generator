// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return `[![${license}](https://img.shields.io/badge/License-Apache_2.0-blue)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'MIT License') {
    return `[![${license}](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GNU General Public License v3.0') {
    return `[![${license}](https://img.shields.io/badge/License-GPLv3-blue)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'Mozilla Public License 2.0') {
    return `[![${license}](https://img.shields.io/badge/License-MPL_2.0-brightgreen)](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'MIT License') {
    return `[${license}](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GNU General Public License v3.0') {
    return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'Mozilla Public License 2.0') {
    return `[${license}](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `The application is covered under ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
- ${renderLicenseSection(data.license)}
## Contributing
- ${data.contribution}
## Tests
${data.tests}
## Questions
If you have some questions feel free to contact me
- Github - [${data.name}](https://github.com/${data.github})
- Email - [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
