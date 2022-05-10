const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const async = require("hbs/lib/async");
const id = require("../middleware/getRangeId" );
const Review = require("../models/Review");
const Person = require("../models/Person")

router.get("/:id", async (req, res) => {
    // console.log('reached for id', req.params)
    const id = req.params.id;
    // console.log(id)
    const aPerson = await Person.findById(id).populate('review')
      
    const theseReviews = await Review.find({reviewer: aPerson.name})
    // console.log(theseReviews)

    res.render('personDetails', {title: "Details", person: aPerson, reviews: theseReviews});
});

// router.get("/personDetails/:id", async (req, res) => {
//     res.render("personDetails")
// })

module.exports = router;