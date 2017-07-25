let mongoose = require('mongoose');
mongoose.connect('process.env.MONGODB_URI || mongodb://localhost/DelayedAirplane-App')
