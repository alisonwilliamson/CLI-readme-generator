// function to generate markdown for README
function generateMarkdown(data) {
   return `# Title: ${data.title}
##Table of Contents
* [Installation](#installation)               
* [Usage](#usage)                    
* [License](#license)                      
* [Contributor](#contributors)         
* [Question](#question) 
## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## Contributions:
${data.contributors}
## Testing:
${data.tests}
## License:
${data.license}
## Questions:
${data.github} , ${data.email}
`;
}

module.exports = generateMarkdown;