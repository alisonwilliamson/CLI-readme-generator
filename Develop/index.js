const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a short description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What is the installation process?",
    name: "installation",
  },
  {
    type: "input",
    message: "How will this project be used?",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide a list of contributors.",
    name: "contributors",
  },
  {
    type: "input",
    message: "What command should be used to run dependencies?",
    name: "dependencies",
  },
  {
    type: "input",
    message: "What kind of license do you need? You can choose ISC, MIT, Apache License 2.0, GNU GPLv2, GNU GPLv3.",
    name: "license",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your Github profile url?",
    name: "url",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "How should you run tests?",
    name: "tests",
  },
];

// function to write README file
async function writeToFile(filename, data) {
  fs.writeFile(filename,data, function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  })
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((results) => {
    const readTemplate = generateMarkdown(results);
    writeToFile("TestREADME.md", readTemplate);
    return "success"
  });
}

// function call to initialize program
init();
