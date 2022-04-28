const mongoose = require('mongoose');
const Schema = mongoose.Schema
const person = require('./Person')
const review = require('./Review')


const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: [true],
    minLength: 50
  },
  commenter: [{ 
    type: Schema.Types.ObjectId, 
    ref:'Person'
  }],
  range: [{ 
    type: Schema.Types.ObjectId, 
    ref:'Range'
  }],
})


module.exports = mongoose.model("Comment", commentSchema);