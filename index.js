// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown');
const util = require('util');
const createReadMe = util.promisify(writeToFile);
const licenses = ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'No License'];


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the repository that you have created?',
        validate: nameInput => {
            return (nameInput ? true : console.log('Provide your repository title.'));
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a thorough description of your repository.',
        validate: nameInput => {
            return (nameInput ? true : console.log('Provide a description for your application.'));
        }
    },


    {
        type: 'input',
        name: 'installation',
        message: 'List installation instructions.',
        validate: nameInput => {
                return (nameInput ? true : console.log('Provide installation instructions.'));
        }
    },



    {
        type: 'input',
        name: 'usage',
        message: 'Explain the usage of the content in your repository.',
        validate: nameInput => {
                return (nameInput ? true : console.log('Provide usage information.'));
        }
    },


    {
        type: 'input',
        name: 'contribution',
        message: 'List contribution instructions for users.',
        validate: nameInput => {
                return (nameInput ? true : console.log('Provide information regarding how to contribute to the repository.'));
        }
    },


    {
        type: 'input',
        name: 'test',
        message: 'Provide an explanation to how users can test your application.',
        validate: nameInput => {
                return (nameInput ? true : console.log('Provide testing instructions.'));
        }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Select the license used',
        choices: licenses,
        validate: nameInput => {
            return (nameInput ? true : console.log('Insert license used.'));
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
        validate: nameInput => {
            return (nameInput ? true : console.log('Insert GitHub Username.'));
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            return (nameInput ? true : console.log('Enter your email address.'));
        }
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => error ? console.log("There appears to be an issue " + error) : console.log("No issues found"))
}



// TODO: Create a function to initialize app
async function init() {
    try {
        const userInput = await inquirer.prompt(questions);
        const rmMarkdown = generateMarkdown(userInput);
        await createReadMe('README0.md', rmMarkdown);
    }
    catch (error) {
        console.log('There appears to be an error: ' + error);
    }

};

// Function call to initialize app
init();