const Employee = requirer('./lib/Employee');
const Manager = requirer('./lib/Manager');
const Engineer = requirer('./lib/Engineer');
const Intern = requirer('./lib/Intern');

// Getting different role infomation
function roleInfo(employee){
    if(employee.getRole() ==='Manager'){
        return `Office Number: ${employee.getOfficeNumber()}`;
    }else if(employee.getRole() === 'Engineer'){
        return `Github: <a target="_blank" href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
    }else{
        return employee.getSchool();
    }
};

// Generating cards
function employeeCard(teamData){
    let card = ''
    teamData.forEach(employee => {
        card += `
        <div class="card mx-2 text-center" style="width: 18rem;">
            <div class="card-header bg-primary text-light" style="height: 5rem;">
                <h4>${employee.name}</h4>
                 <h5>${employee.getRole()}</h5>
             </div>
            <div class="card-body">
                  <ul class="list-group list-group-flush">
                     <li class="list-group-item">ID: ${employee.id}</li>
                     <li class="list-group-item"><a target="_blank" href="mailto:${employee.email}">Email: ${employee.email}</a></li>
                       <li class="list-group-item">${roleInfo(employee)}</li>
                 </ul>
           </div>
        </div>
        `
    });
    return card;
};


