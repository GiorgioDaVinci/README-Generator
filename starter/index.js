const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");

// array of questions for user
const questions =[
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
        message: "Are there any contributors to this project?",
        name: "credits",
        type: "input"
    },
    {
        message: "Are there any tests that were used in this project?",
        name: "tests",
        type: "input"
    },
    {
      message: "What is the license?",
      name: "license",
      type: "list",
      choices: ['MIT', 'Eclipse', 'Apache', 'IBM', 'Mozilla','ISC']
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
  ]

// function to initialize program
function init() {
  inquirer.prompt(questions)
      .then((answers) => {
          console.log(answers);
          writeToFile("README.md", generateMarkdown(answers));
      })
      .catch((error) => {
          if (error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
          } else {
              // Something else went wrong
          }
      });
}

function writeToFile(filename, data){
  return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

// function call to initialize program
init();
