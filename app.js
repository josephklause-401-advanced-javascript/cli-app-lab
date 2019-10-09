const inquirer = require('inquirer');


let userAnswers = [];

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
        },
        {
          type: 'confirm',
          name: 'saveToDB',
          message: 'Would you like to save your profile to the database?',
          default: 'y'
        }
      ])
      .then(answers => {
        return this.displayAndPostAnswers(answers)
          .then(() => {
            return inquirer
              .prompt([
                {
                  type: 'confirm',
                  name: 'getFromDB',
                  message: 'Would you like to see everyone who has signed into the database?',
                  default: 'y'
                }
              ])
              .then(answer => {
                if(answer) {
                  return this.getFromDatabase(answer)
                    .then(() => {
                      return inquirer
                        .prompt([
                          {
                            type: 'confirm',
                            name: 'getFromDB',
                            message: 'Want to change someone\'s name?',
                            default: 'y'
                          }
                        ])
                        .then(answer => {
                          if(answer) {
                            return inquirer
                              .prompt([
                                {
                                  type: 'input',
                                  name: 'updateId',
                                  message: 'Copy an id and paste it here'
                                },
                                {
                                  type: 'list',
                                  name: 'whichName',
                                  message: 'Do you want to change the first or last name?',
                                  choices: ['firstName', 'lastName'],
                                  default: 'firstName'
                                },
                                {
                                  type: 'input',
                                  name: 'nameUpdate',
                                  message: 'What would you like to change it to?',
                                  default: 'Jabba'
                                }
                              ])
                              .then(answers => this.putToDatabase(answers));
                          } console.log('Thanks for adding to my database!');
                          console.log('Good Bye!');
                        });
                    });
                }
              }); 
          });
      });
  }

  displayAndPostAnswers(answers) {
  
    userAnswers = {
      firstName: answers.firstName,
      lastName: answers.lastName,
      age: answers.age,
      likeStarWars: answers.likeStarWars,
      favAnimals: answers.favAnimals
    };
    if(answers.saveToDB) {
      return this.api.postUser(userAnswers);
    }
    return userAnswers;
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