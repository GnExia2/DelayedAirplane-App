var db = require('../models');

function index(req, res) {
  db.comment.find({}, function(err, allComments){
    res.json(allComments);


  });
}

function create(req, res) {
  // create new comment with form data (`req.body`)
    console.log('comment created');
    var newComment = {
      name: req.body.name,
      airport: req.body.airport,
      comment: req.body.comment
    }

    comment = new db.delay(newComment);

    comment.save(function handleDBCommentSaved(err, savedComment) {
      res.json(savedComment);
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
