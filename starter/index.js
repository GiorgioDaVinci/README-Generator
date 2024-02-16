const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "What is the title of the README?",
        name: "title",
        type: "input"
    },
    {
        message: "Describe the project",
        name: "description",
        type: "input"
    },
    {
        message: "How do you install the app?",
        name: "installation",
        type: "input"
    },
    {
        message: "How do you use the app?",
        name: "usage",
        type: "input"
    },
    {
        message: "What is the license?",
        name: "license",
        type: "list",
        choices: ['MIT', 'GPL', 'Apache', 'GMJ', 'ISC']
    },
    {
        message: "Are there any contributors to this project?",
        name: "contributors",
        type: "input"
    },
    {
        message: "Are there any tests that were used in this project?",
        name: "tests",
        type: "input"
    },
    {
        message: "What is your Github username?",
        name: "github",
        type: "input"
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const title = answers.title
    const description = answers.description
    const installation = answers.installation
    const usage = answers.usage
    const license = answers.license
    const contributors = answers.contributors
    const tests = answers.tests
    const github = answers.github
    const email = answers.email

    const user = `
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    #${title}
    
    ##${description}

    ##${installation}

    ##${usage}

    ##${license}

    ##${contributors}

    ##${tests}

    ##Questions
    - Github: ${github}
    - Email: ${email}
    
    `
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
