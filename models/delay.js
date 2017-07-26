//require mongoose and setup Schema

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var delaySchema = new Schema({
     airline: String,
     flightNumber: Number,
     fromTo: String,
     status: String,
     timeDelayed:String,
     image:String
  });
// create Schema

var delay = mongoose.model('delay', delaySchema);

module.exports = delay;
