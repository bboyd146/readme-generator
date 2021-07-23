// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your first and last name?',
            name: 'name',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'What is the current year?',
            name: 'year',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'Provide a short description explaining the what, why, and how of your project.',
            name: 'description',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'installation',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
            name: 'usage',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'list',
            message: 'Choose a license for your project.',
            choices: ['Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause License','Boost Software License 1.0'],
            name: 'license',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section',
            name: 'credits',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'If your project has a lot of features, list them here.',
            name: 'features',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
            name: 'contribute',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'Please enter your github username: ',
            name: 'git',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'Please enter your email address: ',
            name: 'email',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
        {
            type: 'input',
            message: 'Please enter instructions on how to reach you with additional questions: ',
            name: 'emaili',
            validate: function (value){if (value){return true} else return "Value needed to continue"},
        },
    ])
    .then((response) => {
        console.log(response)
        return writeToFile(response);
    })

    

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README-generated.md', markdown(data), (err) => {
        err ? console.error(err) : markdown; console.log('Your README.md has been generated');
    });
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();