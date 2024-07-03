const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Defining the schema
const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  genre: {
    type: [String],
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  poster: {
    type: String,
    required: true
  }
});

// Creating the model
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
