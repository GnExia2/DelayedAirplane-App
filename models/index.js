// require mongoose and connect it to the localhost:db
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DelayedAirplane-App');

module.exports.delay = require("./delay.js");
module.exports.comment = require("./comments.js");
