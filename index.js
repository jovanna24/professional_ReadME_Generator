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
    return `# ${answers.title} 

## Table of Contents 
- [Description](#description) 
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description <a name="description"></a>
    ${answers.description} 

## Installation <a name="installation"></a>
    ${answers.install} 

## Usage <a name="usage"></a>
    ${answers.usage}

## Contribution <a name="contribution"></a>
    ${answers.contribution} 

## Tests <a name="tests"></a>
    ${answers.test} 

## License <a name="license"></a>
    This project is licensed under the ${answers.license}. 

## Questions <a name="questions"></a>
    For any questions, please contact [${answers.githubname}](https://github.com/${answers.githubname}) at ${answers.email}.
    `;
};
//Function to add additional data to README file 
// function appendToFile(fileName, data) {
//     fs.appendFile(fileName, data, (err)=>{
//         if (err) {
//             console.error('Error appending to file: ', err); 
//             return;
//         }
//         console.log(`Data appended to ${fileName} successfuly.`)
//     });
// }

// Function to write README file
function writeToFile(fileName, data) {
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('Error writing to file: ', err); 
            return;
        }
        fs.writeFile(fileName, data, (err)=> {
            if (err) {
                console.error('Error writing to file: ', err); 
                return;
            }
                console.log(`Data written to ${fileName} successfully.`);
            });
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
