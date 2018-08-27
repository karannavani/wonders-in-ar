const mongoose = require('mongoose');

const wonderSchema = new mongoose.Schema({
  name: String,
  country: String,
  image: String,
  location: {
    lat: Number,
    lng: Number
  },
  model: String
});

module.exports = mongoose.model('Property', wonderSchema);
