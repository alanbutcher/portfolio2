const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const portfolioSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true, maxlength: 256 },
  languages: { type: String, required: true, maxlength: 256 },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Portfolio', portfolioSchema)