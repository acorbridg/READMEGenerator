const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "BSD3":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    default:
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  switch (license) {
case "MIT":
  return "[![License: MIT](https://opensource.org/licenses/MIT)";
case "Apache":
  return "[![License](https://opensource.org/licenses/Apache-2.0)";
case "BSD3":
  return "[![License](https://opensource.org/licenses/BSD-3-Clause)";
default:
  return ""
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(fileName, data) {

  const content = "## " + data.title +
      "\n# " + data.DescriptionTitle +
      "\n\n" + data.Description +
      "\n\n## Table of Contents \n* " + data.TableofContents +
      "\n\n## Usage \n" + data.Usage +
      "\n\n## License \n" + data.License +
      "\n\n## Contributing \n" + data.Contributing +
      "\n\n## Tests \n" + data.Tests +
      "\n\n## FAQ \n" + data.Questions +
      "\n\n![webpage for " + data.Title + "]\n(Screenshot.png)"
  "\n\n Website URL: " + data.Website

  fs.writeFile(fileName, content, err => {
      if (err) {
          console.error(err);
      }
      // file written successfully
  });

}

module.exports = generateMarkdown;
