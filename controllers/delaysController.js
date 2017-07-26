/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/delays
function index(req, res) {
  // send back all delays as JSON
  db.Delay.find({}, function(err, allDelays) {
    res.json(allDelays);
  });
}

module.exports = {
  index: index
  
}
