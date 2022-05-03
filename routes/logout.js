var express = require('express');
var router = express.Router();


router.get("/", async (req, res) => {
    res.clearCookie("accessToken")
    console.log("logout")
    res.redirect("/")
  });

  module.exports = router;