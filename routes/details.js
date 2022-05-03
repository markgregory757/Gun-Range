const express = require("express");
const router = express.Router();
const Range = require("../models/Range");
const addRange = require("../views/addRange");
const jwt = require("jsonwebtoken");
const async = require("hbs/lib/async");
const id = require("../middleware/getRangeId" )

router.get("/:id",  async (req, res) => {
    
    const id = req.params.id;
    const aRange = await Range.findOne({id: id})
    res.render('details', {title: "Details", range: aRange});
});

module.exports = router;