var db = require("./models");

var delayList =[];
  delayList.push({
              airline: 'United',
              flightNumber: 5142,
              origin:"ATL",
              destination: "SFO",
              status: "Delayed",
              timeDelayed:30,
              image: 'images/unitedairlinesIcon.png'
              });
  delayList.push({
              airline: 'SouthWest',
              flightNumber: 3563,
              origin: "SFO",
              destination:"ATL",
              status: "Delayed",
              timeDelayed:99,
              image: 'images/southwestIcon.jpg'
              });
  delayList.push({
              airline: 'Delta',
              flightNumber: 5929,
              origin: "SFO",
              destination: "LAX",
              status: "Delayed",
              timeDelayed:99,
              image: 'images/deltaIcon.png'
              });

  db.delay.remove({}, function(err, delay){
    // code in here runs after all delays are removed
    db.delay.create(delayList, function(err, delay){
      // code in here runs after all delays are created
      if (err) { return console.log('ERROR', err); }
      console.log("all delays:", delay);
      console.log("created", delay.length, "delay");
    });
  });




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var commentList =[];
  commentList.push({
    name: "John",
    airport: "SFO",
    comment: "I really like SFO"
              });

db.comment.remove({}, function(err){
    // code in here runs after all delays are removed
  db.comment.create(commentList, function(err, comment){
    // code in here runs after all comments are created
    if (err) { return console.log('ERROR', err); }
    console.log("all comments:", comment);
    console.log("created", comment.length, "comment");
    process.exit();
  });
});
