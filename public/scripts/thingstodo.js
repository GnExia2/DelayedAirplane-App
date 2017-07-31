$(document).ready(function(){


//append static info when the dropdown selection changes
  $(document).on('change', '.air', function(e) {
    console.log(this.options[e.target.selectedIndex].text);
    if(this.options[e.target.selectedIndex].text == 'SFO'){
      var sfoHtml =
      ('<p>You\'ll appreciate our eclectic mix of bookstores, gift shops, travel\
      outfitters, designer brands and luxury boutiques. Many retailers are \
      local, featuring authentic San Francisco souvenirs and merchandise for \
      your last minute purchases.\
      San Francisco and the Bay Area are world-famous for local cuisine. Whether \
      you\'re hurrying for a quick snack before a flight or have time for a leisurely \
      meal, you\'ll enjoy delicious choices at SFO. Nearly all our airport eateries are\
      branches of local restaurants, bars and cafés, so you can get a real taste of \
      San Francisco, no matter where you\'re heading next.\
      And if you\'re in the mood for a manicure, facial, or massage, at SFO, you\'ll \
      enjoy airport services that go far beyond the ordinary.\
      </p>')






      $('#appendHere').empty();
      $('#appendHere').append(sfoHtml);



    console.log('sfo worked');
    };
    if(this.options[e.target.selectedIndex].text == 'ATL'){
      var atlantaHtml =
      ('<li><p>In general if your layover is less than three hours you shouldnt even \
      think about leaving the airport the chances of missing your connecting \
      flight are just too great. Most of the more popular attractions in Atlanta\
      are far enough away that its going to take you some time to get there and \
      back, and youll need to allow time to get back through security and get to your gate.\
      restaurants, and services in each concourse and in the terminal building at \
      Hartsfield-Jacksons Shop, Dine Explore page.</p> <li><p> It is not necessary to go through \
      security again to pass between any of the concourses (T, A, B, C, D, E, and F), so \
      youre not limited to the options in the concourses for your arriving and departing\
      flights. For shops/restaurants in the terminal/atrium area, however, you will have\
      to exit the secure area and re-enter, so factor time for that into your planning. \
      Between 6 am and about 9 pm, nearly all of the shops and restaurants are open. After\
      9 pm, things begin to close down for the night, and after 11 pm theres not much \
      open on the concourses (particularly C and D). Atlanta Bread Company is open 24 \
      hours in the Atrium area of the terminal (outside security). There arent, however, \
      any newsstands or other shops selling sundries after 11 pm, so if you need something \
      to read, an aspirin, a travel pillow, or a souvenir tshirt, get it before they close\
      or wait until morning.</p>')

      $('#appendHere').empty();
      $('#appendHere').append(atlantaHtml);










      console.log('atl worked');
    }

  });


//get the comments
  $.ajax({
    method: 'GET',
    url: '/api/comments',
    success: handleSuccess,
    error: handleError
  });

  function handleSuccess(success){
    success.forEach(function(i){
      renderComment(i);
    });
};
  //post new comment
$('#comment-form').on('submit', function(e) {
  e.preventDefault();
  var formData = $(this).serialize();
  console.log('formData', formData);
  $.post('/api/comments', formData, function(comment) {
    console.log('comment after POST', comment);
    renderComment(comment);  //render the server's response
  });
  $(this).trigger("reset");
});


  function handleError(err){
    console.log('There has been an error: ', err);
  }

//function to append comments to page
function renderComment(comment) {
  console.log('rendering comment', comment);
  //function to append comments to page
  var commentHtml = (`

    <div id="travTipBox">
      <h4>
        <li id="${comment._id}">${comment.name}</li>
        <hr>
        <li id="${comment._id}">${comment.airport}</li>
        <hr>
        <liid="${comment._id}"">${comment.comment}</li>
      </h4>
    </div>
    `);
    $('#commentsHere').append(commentHtml);
  };




});
