var express = require('express');
var router = express.Router();
const loginUser = require("../middleware/loginUser");
const Person = require('../models/Person');

router.get('/', loginUser, async function (req, res) {
    const id = req.params.id;
    const aPerson = await Person.findOne({_id: id});
    console.log("User ", aPerson, " is adding a range.")
    res.render('addRange', { title: 'Add Range', range });
});

router.post('/', async(req, res) => {
    const id = req.params.id;
    console.log("POST Adding Range")
    console.log("AR form is ", req.body)
    console.log("ID is ", req.params.id)
    const addRange = {
        name: this.name,
        membersOnly: membersOnly,
        location: req.body.location,
        lanes: {indoor, outdoor},
        onsiteOferings: {store, gunsmith},
        rangePicture: this.rangePicture,
        review: [{}]
    }
});

module.exports = router