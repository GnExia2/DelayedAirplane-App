
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
    console.log('delay created');
    var newDelay = {
      airline: req.body.airline,
      flightNumber: req.body.flightNumber,
      origin: req.body.origin,
      destination: req.body.destination,
      status: req.body.status,
      timeDelayed:req.body.timeDelayed
    }
    if(newDelay.airline == "Delta" || newDelay.airline == "delta"){
      newDelay.image = 'images/deltaIcon.png';
    }
    if(newDelay.airline == "SouthWest" || newDelay.airline == "southwest" || newDelay.airline == "Southwest"){
      newDelay.image = 'images/southwestIcon.jpg'
    }
    if(newDelay.airline == "United" || newDelay.airline == "united"){
      newDelay.image = 'images/unitedairlinesIcon.png'
    }

    if(newDelay.status == "cancelled" || newDelay.status == "cancelled"){
      newDelay.timeDelayed = "N/A";

    }

    delay = new db.delay(newDelay);

    delay.save(function handleDBDelaySaved(err, savedDelay) {
      res.json(savedDelay);
    });
  };

  function destroy(req, res) {
    db.Delay.findByIdAndRemove(req.params.delayId, function(err,delay){
      if (err) {res.status(500).json({error:err.message});
      }
      res.json({delayId:req.params.delayId});
    })
  }



module.exports = {
  index: index,
  create: create,
  destroy: destroy
};
