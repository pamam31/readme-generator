const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");  


// const questions = [ // prompt questions have to be here instead 
        inquirer
            .prompt([
                {  
                    type: "input",
                    name: "username",
                    message: "What is your Github username?",
                },  
                {
                    type: "input",
                    name: "email",
                    message: "What is your email address?",

                },
                {
                    type: "input",
                    name: "title",
                    message: "What is the title of your project?",

                },
                {
                    type: "input",
                    name: "description",
                    message: "Please write a short description of your project.",

                },
                {
                    type: "list",
                    name: "license",
                    message: "Please select a license type",
                    choices: ['MIT', 'APACHE 2.0', 'IBM', 'BSD 3', 'None'],

                },
                {
                    type: "input",
                    name: "install",
                    message: "What command should be run to install dependencies",
                    default: "npm i",

                },
                {
                    type: "input",
                    name: "test",
                    message: "What command should be run to run tests?",
                    default: "npm test",

                },
                {
                    type: "input",
                    name: "usage",
                    message: "What does the user need to know about using the repo?",

                },
                {
                    type: "input",
                    name: "contribution",
                    message: "What does the user need to know about contributing to the repo?",

                },
            ])
            .then((answers) => {
                // const usernameAns = answers.username;
                // const emailAns = answers.email;
                // const titleAns = answers.title;
                // const descriptionAns = answers.description;
                // const licenseAns = answers.license;
                // const installAns = answers.install;
                // const testAns = answers.test;
                // const usageAns = answers.usage;
                // const contributionAns = answers.contribution;
                const readMeContent = generateMarkdown(answers);

                fs.writeFile('./generatedREADME/README.md', readMeContent,(err) =>
                    err ? console.error(err) : console.log('Generating README...') 
                    );
            })
            .catch((error) => {
                if (error.isTtyError) {
                } else {
                    // console.log("error")
                }
            });

    // ];
    

// function to initialize program
function init() {

}

// function call to initialize program
init();
// test
