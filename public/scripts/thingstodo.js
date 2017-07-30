$(document).ready(function(){

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


  $("#air").submit(function(e){
        e.preventDefault();
        console.log("Submitted");
        var formData = $(this);

      if($(formData) == "SFO"){$('appendHere').append(
        //append static sfo data here
        '<p>test</p>'
      )
        console.log('SFO');

      }
      else if(formData == "ATL"){$('appendHere').append(
        //append static sfo data here
        '<p>test</p>'
      )
        console.log('ATL');

      }
  });

  //function to append comments to page
  function renderComment(comment) {
    console.log('rendering comment', comment);
    //function to append comments to page
    var commentHtml = (`

    `);
    $('#appendHere').append(commentHtml);
  };




});
