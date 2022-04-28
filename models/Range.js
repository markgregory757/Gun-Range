const mongoose = require('mongoose');
const Schema = mongoose.Schema
const review = require('./Reviews')

const rangeSchema = new mongoose.Schema({
  name: String,
  membersOnly: Boolean,
  location: {
    address: String,
    city: String,
    state: String,
    zip: Number
  },
  image_url: String,
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
  onsiteOferings: {
    store: string,
    gunsmith: Boolean,
  },
  review: [{ 
    type: Schema.Types.ObjectId, 
    ref:'Review'}]
})


module.exports = mongoose.model("Range", rangeSchema);