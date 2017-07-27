var db = require('../models');

function index(req, res) {
  db.comment.find({}, function(err, allComments){
    res.json(allComments);
  })
};

module.exports = {
  index: index,
};
