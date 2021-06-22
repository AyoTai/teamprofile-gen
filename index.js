const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const teamData = [];
const inquirer = require('inquirer');
const generatePage = require('./src/template');
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

// engineer prompts
const promptEngineer = async () =>{
    let response = await inquirer.prompt([
        ...prompts,
        {
            type: 'input',
            name: 'github',
            message: "What's the engineer's github username?"
        }
    ])
    const engineer = new Engineer(response.name, response.id, response.email, response.github);
    teamData.push(engineer);
    addNewPrompt();
};

// intern prompts
const promptIntern = async () =>{
    let response = await inquirer.prompt([
        ...prompts,
        {
            type: 'input',
            name: 'school',
            message: "Which school does the intern attend?",
        }
    ])
    const intern = new Intern(response.name, response.id, response.email, response.school);
    teamData.push(intern);
    addNewPrompt();
};

// starting prompts
const initPrompt = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What's their employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the team manager's email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What's the team manager's office number?",
        }
    ])
    .then(response =>{
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamData.push(manager);
    })
}

initPrompt()
.then(addNewPrompt)
.catch(err =>{
    console.log(err);
})