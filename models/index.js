// require mongoose and connect it to the localhost:db
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/DelayedAirplane-App', {useMongoClient: true});

module.exports.delay = require("./delay.js");
module.exports.comment = require("./comments.js");
