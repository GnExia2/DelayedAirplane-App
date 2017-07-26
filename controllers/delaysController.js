var db = require('../models');

  // console.log('this works');
function index(req, res) {
  db.delay.find({}, function(err, allDelays){
    res.json(allDelays);
  })
}

module.exports = {
  index: index
};
