const firstQuestions = [
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
];

const putQuestions = [
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
];

module.exports = {
  firstQuestions,
  putQuestions
};