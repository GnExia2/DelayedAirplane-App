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

  function handleError(err){
    console.log('There has been an error: ', err);
  }

//function to append comments to page
function renderComment(comment) {
  console.log('rendering comment', comment);
  //function to append comments to page
  var commentHtml = (`
    test
    `);
    $('#commentsHere').append(commentHtml);
  };




});
