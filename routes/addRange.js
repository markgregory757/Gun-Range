const express = require('express')
const router = express.Router()
const Range = require('../models/Range')
const addRange = require('../views/addRange')
const jwt = require('jsonwebtoken')
const async = require('hbs/lib/async')
const { range } = require('express/lib/request')
const ranges = []
const loginUser = require('../middleware/loginUser')
const Person = require('../models/Person')

/* GET page. */
router.get('/', loginUser, async function (req, res) {
  res.render('addRange')
  rangeCheck = await Range.find({})
  rangeCheck.forEach((range) => {
    if (!ranges.includes(range.name)) {
      ranges.push(range.name)
    }
  })
  // console.log("ranges: ",ranges)
})

/* POST new range. */
router.post('/', async (req, res) => {
  let {
    name,
    membersOnly,
    address,
    city,
    state,
    zip,
    imageURL,
    indoorLanes,
    outdoorLanes,
    trapSkeet,
    rentSales,
    gunsmith,
  } = req.body


// ADDING NULL VALUES
  if (membersOnly == null) {
    membersOnly = 'Open to the Public'
  }
  if (trapSkeet == null) {
    trapSkeet = "Trap ahd Skeet Unavailable"
  }
  if (rentSales == null) {
    rentSales = "Sales or Rental Unavailable"
  }
  if (gunsmith == null) {
    gunsmith = "No Gunsmith"
  }
  if (outdoorLanes == null) {
    outdoorLanes = "None"
  }
  if (indoorLanes == null) {
    indoorLanes = "None"
  }


// CHECKING FOR PREEXISTING RANGE THEN SAVING
  if (ranges.includes(name)) {
    // console.log(ranges)
    res.send('Range already exists')
    // console.log("Range already exists")
  } else {
    const newRange = new Range({
      name,
      membersOnly,
      address,
      city,
      state,
      zip,
      imageURL,
      indoorLanes,
      outdoorLanes,
      trapSkeet,
      rentSales,
      gunsmith,
    })
    // console.log("newRange: ",newRange)
    await newRange.save()
    // await console.log("range: ",newRange)
    res.render('addReview', { range: newRange._id })
  }
})

module.exports = router
