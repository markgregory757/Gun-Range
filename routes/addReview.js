const express = require("express");
const router = express.Router();
const Range = require("../models/Range");
const addRange = require("../views/addRange");
const jwt = require("jsonwebtoken");
const async = require("hbs/lib/async");
const id = require("../middleware/getRangeId" )
const loginUser = require("../middleware/loginUser");
const Person = require('../models/Person');

router.get("/:id", loginUser, async (req, res) => {
  const id = req.params.id;
    // console.log(id)
    const rangeToReview = await Range.findById(id)
    res.render('addReview', {title: "Details", range: rangeToReview,});
});

router.post("/", async (req, res) => {
  const id = req.params.id
  let {review, reviewer, range} = req.body;
  reviewer = req.cookies.username
  console.log('req: ',req.body)
  // console.log('user', req.cookies.username)

  // const newReview = new Range({
  //   review,
  //   reviewer,    
  //   range
  // })
  // await newReview.save();
  // res.render("addReview");
  // console.log(review, reviewer, range)

  // const newRange = new Range({
  //   review: req.body.review, 
  // range: []
  // })
  // await newReview.save();
  res.render("addReview");
})

module.exports = router