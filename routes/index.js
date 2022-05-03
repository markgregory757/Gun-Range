const express = require('express')
// const async = require('hbs/lib/async')
const router = express.Router()
const Person = require('../models/Person')
const Range  = require('../models/Range')


/* GET home page. */
router.get('/', async function (req, res, next) {
  const people = await Person.find({})
  const ranges = await Range.find({})
  // console.log(ranges)
  // console.log(person)
  res.render('index', {ranges, people})
});

module.exports = router