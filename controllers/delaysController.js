
var db = require('../models');

  // console.log('this works');
function index(req, res) {
  db.delay.find({}, function(err, allDelays){
    res.json(allDelays);
  })

}
// POST /api/albums
function create(req, res) {
  // create new delay with form data (`req.body`)
    console.log('books create');
    var delay = new db.delay({
      airline: req.body.airline,
      flightNumber: req.body.flightNumber,
      from: req.body.from,
      to: req.body.to,
      status: req.body.status,
      timeDelayed:req.body.timeDelayed,
      image:req.body.image
    })
    delay.save(function handleDBDelaySaved(err, savedDelay) {
      res.json(savedDelay);
    });
  };


module.exports = {
  index: index,
  create: create
};
