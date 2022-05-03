const async = require('hbs/lib/async');
const Cube = require('../models/Range')

async function getRangeId(req, res, next) {
  let range;

  try{
    range = await Range.findById(req.params.id)
    if (range == null){
      return res.status(400).json({message: 'Unable to find Range'})
    } 
  } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  req.range = range
  next()
}

module.exports = getRangeId