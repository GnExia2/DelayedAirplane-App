//require mongoose and setup Schema

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var delaySchema = new Schema({
       Airline: String,
       FlightNumber: String,
       FromTo: String,
       Status: String,
       TimeDelayed:String,
  });
// create Schema

var delay = mongoose.model('delay', delaySchema);

module.exports = delay;
