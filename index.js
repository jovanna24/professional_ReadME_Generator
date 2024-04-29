// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptDev = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title', 
            message: "What is the title of your project?", 
        }, 
        {
            type: 'input', 
            name: 'description',  
            message: 'Please provide a description of your project explaining the what, why, and how of your project.',

        },
        {
            type: 'input', 
            name: 'install',  
            message: 'Please provide the steps required to install your project and a step-by-step description of how to get the development environment running.',

        },
        {
            type: 'input', 
            name: 'usage',  
            message: 'Please provide instructions and examples for use of your application.',

        },
        {
            type: 'input', 
            name: 'contribution',  
            message: 'Please provide a list of your collaborators, third-party assets, or tutorials if any, with links to their GitHub profiles, the creators with links to their primary web presence, and appropriate links respectively.',

        },
        {
            type: 'input', 
            name: 'test',  
            message: 'If you have written tests for your application, please provide them here.',

        },
        {
            type: 'list', 
            name: 'license',  
            message: 'Please select the appropriate license for your application.',
            choices: ['MIT License', "Apache License 2.0", 'BSD 3-Clause', "BSD 2-Clause "],

        },
        {
            type: 'input', 
            name: 'test',  
            message: 'If you have written tests for your application, please provide them here.',

        },
        {
            type: 'input', 
            name: 'githubname',  
            message: 'What is your GitHub username?',

        },
        {
            type: 'input', 
            name: 'email',  
            message: 'What is your email address?',

        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
