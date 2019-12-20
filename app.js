const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const appendFileAsync = util.promisify(fs.appendFile);


const startApp = function startApp() {
    appendFileAsync('./output/team.html', `
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

    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What title do they have, manager, engineer, or intern?'
        }
    ]).then(answers => {
        const role = answers.title.toLowerCase()
        if (role === 'manager') {
            const mngr = new Manager();
            mngr.createHTML();
        } else if (role === 'engineer') {
            const eng = new Engineer();
            eng.createHTML();
        } else if (role === 'intern') {
            const intern = new Intern();
            intern.createHTML();
        } else {
            return console.log('error')
        }
    })
}

startApp();

exports.startApp = startApp