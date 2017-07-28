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
    }
    comments = new db.delay(newComment);

    comment.save(function handleDBCommentSaved(err, savedComment) {
      res.json(savedComment);
    });
  };



module.exports = {
  index: index,
  create: create
};
