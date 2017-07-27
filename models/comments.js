//require mongoose and setup Schema

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var commentsSchema = new Schema({
     name: String,
     airport: String,
     comment: String
  });
// create Schema

var comments = mongoose.model('comments', commentsSchema);

module.exports = comments;
