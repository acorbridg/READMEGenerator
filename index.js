// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    name: "Title",
    message: "Give it a name!"
    }
    {type: "input",
    name: "DescriptionTitle",
    message: "Description Title"
    }
    {type: "input",
    name: "Description",
    message: "What is this project about?"
    }
    {type: "input",
    name: "TableofContents",
    message: "Table of Contents"
    }
    {type: "input",
    name: "Usage",
    message: "What is it used for?"
    }
    {type: "input",
    name: "License",
    message: "Does it have any licenses?"
    }
    {type: "input",
    name: "Contributing",
    message: "Who helped?"
    }
    {type: "input",
    name: "Tests",
    message: "Any testing done?"
    }
    {type: "input",
    name: "Questions",
    message: "Frequently asked questions"
    }
    {type: "input",
    name: "Image",
    message: "is there a picture?"
    }
    {type: "input",
    name: "Website",
    message: "Website URL:"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const content = "# " + data.title + 
    "\n# " + data.DescriptionTitle +
    "\n\n" + data.Description +
    "\n\n## Table of Contents \n* " + data.TableofContents +
    "\n\n## Usage \n" + data.Usage +
    "\n\n## License \n" + data.License +
    "\n\n## Contributing \n" + data.Contributing +
    "\n\n## Tests \n" + data.Tests +
    "\n\n## FAQ \n" + data.Questions +
    "\n\n![webpage for " + data.Title + "]\n(Screenshot.png)"
    "\n\n Website URL: " +data.Website

    fs.writeFile(fileName, content, err => {
    if (err) {
        console.error(err);
    }
  // file written successfully
});

}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt (questions)
    writeToFile("README.txt", answers)
}

// Function call to initialize app
init();
