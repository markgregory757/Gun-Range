const express = require("express");
const router = express.Router();
const Range = require("../models/Range");
const addRange = require("../views/addRange");
const jwt = require("jsonwebtoken");
const async = require("hbs/lib/async");
const id = require("../middleware/getRangeId" );
const Review = require("../models/Review");
const Person = require("../models/Person")
const loginUser = require("../middleware/loginUser");

router.get('/', loginUser, async (req, res) => {
  const reviews = await Review.find()
  console.log(reviews[0])
  res.render('blogs', {reviews: reviews} )
});



module.exports = router