const express = require('express')
const async = require('hbs/lib/async')
const router = express.Router()
const Person = require('../models/Person')


/* GET home page. */
router.get('/', async function (req, res, next) {
  const person = await Person.find().lean()
  console.log(person)
  res.render('index', {person})
});

module.exports = router