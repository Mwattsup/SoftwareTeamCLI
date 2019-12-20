const inquirer = require('inquirer');

class Employee {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        inquirer.prompt([
            {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
            }
        ]).then(answers => {
            this.name = answers.name;
            this.getId();
        })
        return this.name;
    }

    getId() {
        inquirer.prompt([
            {
                type: 'number',
                name: 'id',
                message: "What is the employee's ID?"
            }
        ]).then(answers => {
            this.id = answers.id;
            this.getEmail();
        })
        return this.id;
    }

    getEmail(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?"
            }
        ]).then(answers => {
            this.email = answers.email;
            this.getRole();
        })
        return this.email;
    }

    getRole(){
        this.role = 'Employee'
        return this.role;
    }
    
}

module.exports = Employee