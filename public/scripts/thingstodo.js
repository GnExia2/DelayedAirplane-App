$(document).ready(function(){


//append static info when the dropdown selection changes
  $(document).on('change', '.air', function(e) {
    console.log(this.options[e.target.selectedIndex].text);
    if(this.options[e.target.selectedIndex].text == 'SFO'){
      $('#appendHere').empty();
      $('#appendHere').append('<p> append sfo data <p>')



    console.log('sfo worked');
    };
    if(this.options[e.target.selectedIndex].text == 'ATL'){
      $('#appendHere').empty();
      $('#appendHere').append('<p> append atlanta data<p>')




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
$('#comment-form form').on('submit', function(e) {
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
        <liid="${comment._id}">${comment.comment}</li>
      </h4>
    </div>
    `);
    $('#commentsHere').append(commentHtml);
  };




});
