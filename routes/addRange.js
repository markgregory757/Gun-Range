var express = require('express');
var router = express.Router();
const loginUser = require("../middleware/loginUser");

router.get('/', loginUser, function (req, res) {
    res.render('addRange');
});

module.exports = router