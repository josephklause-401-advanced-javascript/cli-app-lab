const mongoose = require('mongoose');
const { Schema } = mongoose;
const { requiredString, requiredNumber, requiredBoolean } = require('./required-types');


const schema = new Schema({
  firstName: { requiredString },
  lastName: { requiredString },
  age: { requiredNumber },
  likeStarWars: { requiredBoolean },
  favAnimals: [String]
});

module.exports = mongoose.model('Cli-user', schema);