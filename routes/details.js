const express = require("express");
const router = express.Router();
const Range = require("../models/Range");
const addRange = require("../views/addRange");
const jwt = require("jsonwebtoken");
const async = require("hbs/lib/async");
const id = require("../middleware/getRangeId" );
const Review = require("../models/Review");
let thisId = ""

router.get("/:id", async (req, res) => {
    // console.log('reached for id', req.params)
    const id = req.params.id;
    thisId = id;
    // console.log(id)
    const aRange = await Range.findById(id).populate('review')
      
    const theseReviews = await Review.find({range: aRange.name})
    console.log(aRange.imageURL[0])

    res.render('details', {title: "Details", range: aRange, reviews: theseReviews});
});

router.get("/personDetails/:id", async (req, res) => {
    res.render("personDetails")
})

router.post("/", async (req, res) => {
  const id = thisId;
  let {addPic} = req.body
  console.log("new image is: ",addPic)
  const attachToRange = await Range.findOneAndUpdate(
    {_id: id},
    {$addToSet: {imageURL: addPic}},
    {new: true}
    )

    console.log("id: ",id)
    const aRange = await Range.findById(id).populate('review')
    console.log(aRange)

    const theseReviews = await Review.find({range: aRange.name})
    // console.log(aRange.imageURL[0])

    res.render('details', {title: "Details", range: aRange, reviews: theseReviews});
})
module.exports = router;