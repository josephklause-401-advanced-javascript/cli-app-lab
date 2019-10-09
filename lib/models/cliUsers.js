const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString, RequiredNumber, RequiredBoolean } = require('./required-types');


const schema = new Schema({
  firstName: RequiredString,
  lastName: RequiredString,
  age: RequiredNumber,
  likeStarWars: RequiredBoolean,
  favAnimals: [String]
});

module.exports = mongoose.model('Cli-user', schema);