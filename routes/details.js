const express = require("express");
const router = express.Router();
const Range = require("../models/Range");
const addRange = require("../views/addRange");
const jwt = require("jsonwebtoken");
const async = require("hbs/lib/async");
const id = require("../middleware/getRangeId" )

router.get("/:id", async (req, res) => {
    console.log('reached for id', req.params)
    const id = req.params.id;
    // console.log(id)
    const aRange = await Range.findById(id)
    console.log(aRange)
    res.render('details', {title: "Details", range: aRange});
});

router.get("/personDetails/:id", async (req, res) => {
    res.render("personDetails")
})

module.exports = router;