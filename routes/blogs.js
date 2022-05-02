var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('blogs', { title: 'Create A Blog'});
  });


router.post('/', (req, res) => {
  console.log("POST Create Blog")
  console.log("CB form is", req.body);
  res.send("POST post a blog")
})
module.exports = router