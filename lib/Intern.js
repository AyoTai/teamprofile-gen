const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)

        this.school = school;
    }
    getRole() {
        return '&#127891 Intern';
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;