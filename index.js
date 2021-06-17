const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');

const prompt = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their Employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?'
    }
]

