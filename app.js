const inquirer = require('inquirer');

module.exports = class App {
  constructor(api) {
    this.api = api;
  }
  start() {
    return inquirer
      .prompt([
        { 
          type: 'input',
          name: 'firstName',
          message: 'What is your First Name?',
          default: 'Joe'
        },
        { 
          type: 'input',
          name: 'lastName',
          message: 'What is your Last Name?',
          default: 'Joe'
        },
        {
          type: 'number',
          name: 'age',
          message: 'How old are you?',
          default: 50
        },
        {
          type: 'confirm',
          name: 'likeStarWars',
          message: 'Do you like Star Wars?',
          default: 'y'
        },
        {
          type: 'checkbox',
          name: 'favAnimals',
          message: 'What are your favorite animals?',
          choices: ['Dogs', 'Cats', 'Elephants', 'Parrots']
        }
      ])
      .then(answers => this.displayAnswers(answers))
      .prompt([
        {
          type: 'confirm',
          name: 'saveToDB',
          message: 'Would you like to save your profile to the database?',
          default: 'y'
        }
      ])
      .then(answer => this.postToDatabase(answer))
      .prompt([
        {
          type: 'confirm',
          name: 'getFromDB',
          message: 'Would you like to see everyone who has signed into the database?',
          default: 'y'
        }
      ])
      .then(answer => this.getFromDatabase(answer))
      .prompt([
        {
          type: 'input',
          name: 'updateById',
          message: 'Want to change someone\'s name? Copy an id and paste it here'
        },
        {
          type: 'list',
          name: 'whichName',
          message: 'Do you want to change the first or last name?',
          choices: ['First Name', 'Last Name']
        }
      ])
      .then(answers => this.putToDatabase(answers));
  }

  displayAnswers(answers) {
    //display answers functionality
  }

  postToDatabase(answer) {
    //save to database functionality
  }

  getFromDatabase(answer) {
    //get data functionality
  }

  putToDatabase(answers)

};