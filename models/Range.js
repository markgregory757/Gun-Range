const mongoose = require('mongoose');
const Schema = mongoose.Schema
const review = require('./Review')

const rangeSchema = new Schema({
  name: String,
  membersOnly: String,
  address: String,
  city: {
    type: String,
    required: [true, 'City Required!']
  },
  state: {
    type: String,
    required: [true, 'State Required!']
  },
  zip: Number,
  imageURL: [],
  indoorLanes: Number,
  outdoorLanes: Number,
  trapSkeet: String,
  rentSales: String,
  gunsmith: String,
  review: [{ 
    type: Schema.Types.ObjectId, 
    ref:'Review'}]
})


module.exports = mongoose.model("Range", rangeSchema);