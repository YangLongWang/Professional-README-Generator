// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }        
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter usage information!');
                return false;
            }
        }
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Please choose a license from the following list. (Required)',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'None'],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines for your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter test instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter email address!');
                return false;
            }
        }

    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    console.log(`
        ===============================
        Welcome to Use README Generator
        ===============================
    `);
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(projectData => {
        // return generateMarkdown(projectData);
        return generateMarkdown(mockData);
    })
    .then(contentData => {
        console.log(contentData);
        console.log(typeof contentData);
        return writeToFile(contentData);
    })
    .catch(err => {
        console.log(err);
    })


const mockData = {
    name: 'Longyang Wang',
    github: 'YangLongWang',
    title: 'Generate README Generator',
    description: 'You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.',
    installation: "Because this is a Node.js application that runs from a machine and not a browser, I can't deploy this to GitHub pages. If anyone ever wants to look at the application, you have to clone it to your own local machine and run it from there.",
    usage: 'The application will be invoked by using the following command: node index.js',
    license: 'MIT License',
    contribution: 'Longyang Wang',
    tests: 'Clone it to your own local machine and enter node index.js.',
    email: 'joey674901205@gmail.com'
}