// function to generate markdown for README
function renderBadge(license) {
  if (license === 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else if (license === 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
};

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderBadge(data.license)}
  ## Table of Contents
  **[Description](#description)**<br>
  **[Usage](#usage)**<br>
  **[Installation](#installation)**<br>
  **[Tests](#tests)**<br>
  **[Contributing](#contributing)**<br>
  **[Questions](#questions)**<br>
  **[License](#license)** 

  ## Description 
  ${data.description}
  ## Usage
  ${data.usage}
  ## Installation
  To install necessary dependancies run the following command: <br>
  ${data.install}
  ## Testing
  To run tests, run the following command: <br>
  ${data.test}
  ## Contribution 
  ${data.contribution}
  ## Questions
  If you have any additional queries or need to raise an issue please contact me at **${data.email}**.<br>
  You can also find me on GitHub at **[${data.username}](https://www.github.com/${data.username})**
  ## License 
  This application is licensed under ${data.license} license.
  
`;
}

module.exports = generateMarkdown;
