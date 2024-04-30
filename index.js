// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 


// Array of questions for user input
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

//ReadME file content
const generateREADME = (answers) => {
    return `

    # ${answers.title} 

    ## Table of Contents 
    - [Description](#description) 
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)

    ## Description 
    ${answers.description} 

    ## Installation 
    ${answers.install} 

    ## Usage 
    ${answers.usage}

    ## Contribution 
    ${answers.contribution} 

    ## Tests 
    ${answers.test} 

    ## License 
    This project is licensed under the ${answers.license}. 

    ## Questions 
    For any questions, please contact [${answers.githubname}](https://github.com/${answers.githubname}) at ${answers.email}.
    `;
};

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file: ', err); 
            return;
        }
        console.log(`Data written to ${fileName} successfully.`);
    });
}

// Function to initialize app
const init = () => {
    promptDev() 

    .then((answers) => writeToFile('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md')) 
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
