const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const inquirer = require('inquirer');


const startApp = function startApp() {
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