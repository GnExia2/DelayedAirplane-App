//require mongoose and setup Schema

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var commentSchema = new Schema({
     name: String,
     airport: String,
     comment: String
  });
// create Schema

var comment = mongoose.model('comment', commentSchema);

module.exports = comment;
