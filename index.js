// required packages
const inquirer = require('inquirer');
const fs = require("fs");

const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const questions = [
    // manager
    {
        type: 'input',
        message: "Who is the manager of your team?",
        name: 'managername',
        default: 'John',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'manageremail',
        default: 'john@email.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Does this person have an office number? (Leave blank if no.)",
        name: 'officeNumber'
    },

    // second team member
    {
        type: 'input',
        message: "Who is the second member of your team?",
        name: 'name2',
        default: 'Brad',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'email2',
        default: 'brad@email.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Which role will this person be assigned to?",
        choices: ['Engineer', 'Intern'],
        name: 'role2'
    },

    // third team member
    {
        type: 'input',
        message: "Who is the third member of your team?",
        name: 'name3',
        default: 'Haley',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'email3',
        default: 'haley@email.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Which role will this person be assigned to?",
        choices: ['Engineer', 'Intern'],
        name: 'role3'
    },

    // fourth team member
    {
        type: 'input',
        message: "Who is the fourth member of your team?",
        name: 'name4',
        default: 'James',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'email4',
        default: 'james@email.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Which role will this person be assigned to?",
        choices: ['Engineer', 'Intern'],
        name: 'role4'
    },

    // fifth team member
    {
        type: 'input',
        message: "Who is the fifth member of your team?",
        name: 'name5',
        default: 'Harrison',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'email5',
        default: 'harrison@email.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Which role will this person be assigned to?",
        choices: ['Engineer', 'Intern'],
        name: 'role5'
    }
];

// initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        
        let projectLead = new Manager(userResponses.managername, 1, userResponses.email, userResponses.officeNumber)
        
        if (role2 == 'Engineer') {
            const secondMember = new Engineer(userResponses.name2, userResponses.github, 2, userResponses.email2)
        }
        else {
            const secondMember = new Intern(userResponses.name2, userResponses.school2, 2, userResponses.email2)
        }
        
        if (role3 == 'Engineer') {
            const thirdMember = new Engineer(name3, github, 3, email3)
        }
        else {
            const thirdMember = new Intern(name3, school3, 3, email3)
        }
        
        if (role4 == 'Engineer') {
            const fourthMember = new Engineer(name4, github, 4, email4)
        }
        else {
            const fourthMember = new Intern(name4, school4, 4, email4)
        }
        
        if (role5 == 'Engineer') {
            const fifthMember = new Engineer(name5, github, 5, email5)
        }
        else {
            const fifthMember = new Intern(name5, school5, 5, email5)
        }


    } catch (error) {
        console.log(error);
    }
};

init();
