const mongoose = require('mongoose');
const Schema = mongoose.Schema
const review = require('./Review')

const rangeSchema = new Schema({
  name: String,
  membersOnly: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  image: [],
  lanes:{
    indoor: {
      number: Number,
      distances: String,
      caliberRestrictions: []
    },
    outdoor: {
      number: Number,
      coveredBench: Boolean,
      distances: String,
      caliberRestrictions: []
    }
  },
  review: [{ 
    type: Schema.Types.ObjectId, 
    ref:'Review'}]
})


module.exports = mongoose.model("Range", rangeSchema);