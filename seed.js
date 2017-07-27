var db = require("./models");

var delayList =[];
  delayList.push({
              airline: 'United',
              flightNumber: 5142,
              from:"ATL",
              to: "SFO",
              status: "Delayed",
              timeDelayed:30,
              image: 'images/unitedairlinesIcon.png'
              });
delayList.push({
            airline: 'SouthWest',
            flightNumber: 3563,
            from: "SFO",
            to:"ATL",
            status: "Delayed",
            timeDelayed:99,
            image: 'images/southwestIcon.jpg'
            });



delayList.forEach(function(delay){
    // delay.songs=sampleSongs;
});

db.delay.remove({}, function(err, delay){
  // code in here runs after all albums are removed
  db.delay.create(delayList, function(err, delay){
    // code in here runs after all albums are created

    if (err) { return console.log('ERROR', err); }
    console.log("all delays:", delay);
    console.log("created", delay.length, "delay");
    process.exit();
  });
});
