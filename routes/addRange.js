const express = require("express");
const router = express.Router();
const Range = require("../models/Range");
const addRange = require("../views/addRange");
const jwt = require("jsonwebtoken");
const async = require("hbs/lib/async");
const { range } = require("express/lib/request");
const loginUser = require("../middleware/loginUser");
const ranges = []
const loginUser = require("../middleware/loginUser");
const Person = require('../models/Person');


router.get('/', loginUser, async function (req, res) {

    res.render('addRange');
    rangeCheck = await Range.find({})
    rangeCheck.forEach(range => {
      ranges.push(range.name) 
    });
    // console.log(ranges)
});

router.post("/", async (req, res) => {
  const { name, membersOnly, address, city, state, zip, image, lanes, review } = req.body;
  console.log(name, membersOnly, address, city, state, zip, image, lanes, review)

  if (ranges.includes(name)) {
    res.send("Range already exists")
    console.log("Range already exists")

  } else {

    const newRange = new Range({
      name, 
      membersOnly, 
      address, city, state, zip, 
      image,
      lanes,
      review
    })
  await newRange.save();
  await console.log("range: ",newRange)
  await res.render("/addReview", { range: newRange._id, });
  }
})

module.exports = router