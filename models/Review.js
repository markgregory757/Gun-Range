const mongoose = require('mongoose');
const Schema = mongoose.Schema
const range = require('./Range')
const person = require('./Person')
const comment = require('./Comment')


const reviewSchema = new Schema({
  aReview: {
    type: String,
    required: [true, 'Cannot Submit Blank Review'],
  },
  reviewer: String,
  range: String,
  comments: { 
    type: Schema.Types.ObjectId, 
    ref:'Comment'
  },
})


module.exports = mongoose.model("Review", reviewSchema);