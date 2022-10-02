// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Give it a name!"
    },
    {
        type: "input",
        name: "DescriptionTitle",
        message: "Subtitle"
    },
    {
        type: "input",
        name: "Description",
        message: "What is this project about?"
    },
    {
        type: "checkbox",
        name: "TableofContents",
        message: "Table of Contents",
        choices: ["Description", "Usage", "License", "Contributing", "Tests", "Questions"]
    },
    {
        type: "input",
        name: "Usage",
        message: "What is it used for?"
    },
    {
        type: "list",
        name: "License",
        message: "choose a license",
        choices: ["MIT", "Apache", "N/A"]
    },
    {
        type: "input",
        name: "Contributing",
        message: "Who helped?"
    },
    {
        type: "input",
        name: "Tests",
        message: "Any testing done?"
    },
    {
        type: "input",
        name: "Questions",
        message: "Frequently asked questions"
    },
    {
        type: "input",
        name: "Image",
        message: "is there a picture?"
    },
    {
        type: "input",
        name: "Website",
        message: "Website URL:"
    }

];

// TODO: Create a function to write README file
async function init() {
    const answers = await inquirer.prompt(questions)
    generateMarkdown("README.md", answers)
}


// TODO: Create a function to initialize app
// async function init() {
//     const answers = await inquirer.prompt(questions)
//     generateMarkdown("README.txt", answers)
// }

// Function call to initialize app
init();
