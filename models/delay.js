//require mongoose and setup Schema

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var delaySchema = new Schema({
     airline: String,
     flightNumber: Number,
     origin: String,
     destination: String,
     status: String,
     timeDelayed:String,
     image:String
  });
// create Schema

var Delay = mongoose.model('Delay', delaySchema);

module.exports = Delay;
