var db = require("./models");

var DelayList =[];
  DelayList.push({
              Airline: 'United',
              FlightNumber: 5142,
              FromTo: "SFO",
              Status: "Delayed",
              TimeDelayed:30,
              image: 'images/unitedairlinesIcon.png'
              });




DelayList.forEach(function(album){
    // delay.songs=sampleSongs;
});

db.Delay.remove({}, function(err, delay){
  // code in here runs after all albums are removed
  db.Delay.create(DelayList, function(err, delay){
    // code in here runs after all albums are created
    if (err) { return console.log('ERROR', err); }
    console.log("all delays:", delay);
    console.log("created", delay.length, "delay");
    process.exit();
  });
});
