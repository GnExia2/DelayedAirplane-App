// require mongoose and connect it to the localhost:db
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DelayedAirplane-App');

module.exports.Delay = require("./delay.js");
