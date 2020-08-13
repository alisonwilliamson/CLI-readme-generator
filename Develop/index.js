const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for users
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license do you need? You can choose ISC, MIT, Apache License 2.0, GNU GPLv2, GNU GPLv3.",
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be used to run dependencies?",
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be used to run tests?",
    },
    {
        type: "input",
        name: "repo",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributions",
        message: "Provide list of contributors.",
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


