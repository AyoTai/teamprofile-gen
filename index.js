const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const fs = require('fs');

const prompts = [
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

// Functions //
// to generate html
const writeToFile = (fileName, teamData) =>{
    return new Promise((Res, rej) =>{
        fs.writeFile('./dist/team.html'), (fileName, teamData), err =>{
            if(err){
                rej(err);
                return;
            }
            Res({
                ok: true,
                message: 'Success! You have created the html.'
            })
        }
    })
}

// adding a new employee
const addNewPrompt = () =>{
    inquirer.prompt(
        {
            type: 'confirm',
            name: 'addConfirm',
            message: "Would you like to add another employee?"
        }
    )
    .then(response => {
        if(response.addConfirm){
            inquirer.prompt({
                type: 'list',
                name: 'role',
                message: "What's the employee's role?",
                choices: ['Engineer', 'Intern']
            })
            .then(response =>{
                if(response.role === 'Engineer'){
                    promptEngineer();
                }else{
                    promptIntern();
                }
            })
        }else{
            console.log(teamData)
            let html = generatePage(teamData)
            writeToFile('team.html', html);
        }
    })
}