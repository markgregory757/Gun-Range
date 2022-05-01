const mongoose = require('mongoose');
const Schema = mongoose.Schema
const range = require('./Range')
const person = require('./Person')
const comment = require('./Comment')


const reviewSchema = new Schema({
  review: {
    type: String,
    required: [true],
    minLength: 50
  },
  reviewer: [{ 
    type: Schema.Types.ObjectId, 
    ref:'Person'
  }],
  range: [{ 
    type: Schema.Types.ObjectId, 
    ref:'Range'
  }],
  comments: [{ 
    type: Schema.Types.ObjectId, 
    ref:'Comment'
  }],
})


module.exports = mongoose.model("Review", reviewSchema);