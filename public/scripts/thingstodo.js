$(document).ready(function(){

  $.ajax({
    method: 'GET',
    url: '/api/comments',
    success: handleSuccess,
    error: handleError
  });

  function handleSuccess(success){
    console.log(success);
  }

  function handleError(err){
    console.log('There has been an error: ', err);
  }

  $("#air").submit(function(e){
        e.preventDefault();
        console.log("Submitted");
        var formData = $(this);

      if($(formData) == "SFO"){$('appendHere').append(
        //append sfo data here
        '<p>test</p>'
      )
        console.log('SFO');

      }
      else if(formData == "ATL"){$('appendHere').append(
        //append sfo data here
        '<p>test</p>'
      )
        console.log('ATL');

      }
  });






});
