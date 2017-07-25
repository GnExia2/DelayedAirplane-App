// require mongoose and seutp Schema

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,

  var delaySchema = new Schema({
       Airline: String,
       FlightNumber: String,
       FromTo: String,
       Status: String,
       Time Delayed:String,
  });
// create Schema

var delay = mongoose.model('delay', delaySchema);

module.exports = delay;
