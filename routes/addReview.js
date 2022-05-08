const express = require("express");
const router = express.Router();
const Range = require("../models/Range");
const addRange = require("../views/addRange");
const Review = require("../models/Review");
const addReview = require("../views/addReview")
const jwt = require("../views/addReview");
const async = require("hbs/lib/async");
const id = require("../middleware/getRangeId" )
const loginUser = require("../middleware/loginUser");
const Person = require('../models/Person');
const addPerson = require('../views/createUser')

router.get("/:id", loginUser, async (req, res) => {
  const id = req.params.id;
    // console.log(id)
    const rangeToReview = await Range.findById(id)
    res.render('addReview', {title: "Details", range: rangeToReview,});
});

router.post("/", async (req, res) => {
  const id = req.params.id
  let {aReview, reviewer, range} = req.body;
  reviewer = req.cookies.username
  // console.log('req: ',req.body)

  const newReview = new Review({
    aReview,
    reviewer,    
    range
  })
  // console.log(newReview)
  await newReview.save();

  const attachToRange = await Range.findOneAndUpdate(
    {name: req.body.range},
    {$addToSet: {review: newReview}},
    {new: true}
    )

    const attachToUser =await Person.findOneAndUpdate(
      {name: req.cookies.username},
      {$addToSet: {review: newReview}},
      {new: true}
      )
  // res.render('/')
})

module.exports = router