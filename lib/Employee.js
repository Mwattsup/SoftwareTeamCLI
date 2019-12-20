const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile);

class Employee {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    createHTML(){
        writeFileAsync('./output/team.html', `
        <!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Development Team Roster</title>
</head>

<body>
    <h1>Your Team</h1>
    <div class="container">
        `)
        this.getName();
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