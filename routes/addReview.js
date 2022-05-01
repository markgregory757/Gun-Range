const express = require("express");
const router = express.Router();
const Range = require("../models/Range");
const addRange = require("../views/addRange");
const jwt = require("jsonwebtoken");
const async = require("hbs/lib/async");

router.get("/:id",async (req, res) => {
    rangeToReview = await Range.findById({id})
    res.render('addReview');
});

router.post("/", async (req, res) => {

  console.log(review, reviewer, range)

  const newRange = new Range({
    review: req.body.review, 

    // reviewer req.body.person,       NEEDS TO PULL LOGGED IN USER

    // range: []
  })
  await newReview.save();
  res.render("addReview");
})

module.exports = router