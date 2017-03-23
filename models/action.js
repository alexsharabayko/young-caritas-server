const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Action = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  goal: {
    type: String
  },
  address: {
    type: String
  },
  when: {
    type: String
  }
});

module.exports = mongoose.model('Action', Action);