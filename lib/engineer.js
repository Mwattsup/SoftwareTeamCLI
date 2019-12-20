const inquirer = require("inquirer");
const Employee = require('./Employee');
const app = require('../app');
const fs = require('fs');
const util = require('util')

const appendFileAsync = util.promisify(fs.appendFile);

class Engineer extends Employee {

    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.github = gitHub
    }

    getRole() {
        this.role = 'Engineer'
        this.getGithub();
        return this.role;
    }

    getGithub() {
        inquirer.prompt([
            {
                name: 'githubUser',
                message: 'What is their github username?'
            }
        ]).then(answers => {
            this.github = answers.githubUser
            this.addEmployee();
        })
        return this.github;
    }

    createEngineer(){
        appendFileAsync('./output/team.html', `
        <div class="col-md-4 card text-white bg-warning mb-4" style="max-width: 18rem; margin-right: 2rem; margin-left: 2rem;">
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6>${this.role}</h6>
        <div class="card" style="width: auto; color: black;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: ${this.email}</li>
                <li class="list-group-item">GitHub: ${this.github}</li>
            </ul>
        </div>
    </div>
</div>
        `)
        this.addEmployee();
    }
    addEmployee() {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'moreEmployees',
                message: 'Add another employee?'
            }
        ]).then(answers => {
            if (answers.moreEmployees === true) {
                app.startApp();
            } else {
                appendFileAsync('./output/team.html', `
                </div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
</body>

</html>
                `)
                console.log('Done!');
            }
        })
    }
}

module.exports = Engineer