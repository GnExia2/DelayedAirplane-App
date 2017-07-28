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

  var sfo = false;
  var atl = false;
  
  if(sfo){
  //append sfo data here
  }

  if(atl){
  //append atl data here
  }








});
