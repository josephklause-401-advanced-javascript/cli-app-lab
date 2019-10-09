const inquirer = require('inquirer');
const { firstQuestions, putQuestions } = require('./questions');

module.exports = class App {
  constructor(api) {
    this.api = api;
  }

  start() {
    return inquirer
      .prompt(firstQuestions)
      .then(answers => {
        if(!answers.saveToDB) {
          console.log('Thanks for visiting');
          return;
        }
        return this.displayAndPostAnswers(answers);
      })
      .then(() => {
        return inquirer
          .prompt([
            {
              type: 'confirm',
              name: 'getFromDB',
              message: 'Would you like to see everyone who has signed into the database?',
              default: 'y'
            }
          ]);
      })
      .then(answer => {
        if(!answer.getFromDB) {
          console.log('Thanks for adding to my database');
          return;
        } 
        return this.getFromDatabase(answer);
      })
      .then(() => {
        return inquirer
          .prompt([
            {
              type: 'confirm',
              name: 'changeName',
              message: 'Want to change someone\'s name?',
              default: 'y'
            }
          ]);
      })
      .then(answer => {
        if(!answer.changeName) {
          console.log('Thanks for adding to my database!');
          return;
        }
        return inquirer
          .prompt(putQuestions)
          .then(answers => this.putToDatabase(answers));
      });
  }

  displayAndPostAnswers(answers) {
    const userAnswers = {
      firstName: answers.firstName,
      lastName: answers.lastName,
      age: answers.age,
      likeStarWars: answers.likeStarWars,
      favAnimals: answers.favAnimals
    };
    return this.api.postUser(userAnswers);
  }
  

  getFromDatabase(answer) {
    if(answer) {
      return this.api.getUsers()
        .then(({ body }) => {
          console.log(body);
        });
    } return;
  }

  putToDatabase(answers) {
    let update = {};
    if(answers.whichName === 'firstName') {
      update = {
        firstName: answers.nameUpdate
      };
    } else {
      update = {
        lastName: answers.nameUpdate
      };
    }
    return this.api.updateUserInfo(answers.updateId, update)
      .then(({ body }) => {
        console.log(body);
        console.log('Thanks for adding to my database!');
      });
  }

};