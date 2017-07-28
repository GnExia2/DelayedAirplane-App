var allDelays = [];


$(document).ready(function(){
  $(".dropdown-toggle").dropdown();

  $.ajax({
    method: 'GET',
    url: '/api/delays',
    success: handleSuccess,
    error: handleError
  });
  $('#delay-form form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/delays', formData, function(delay) {
      console.log('flight after POST', delay);
      renderDelay(delay);  //render the server's response
    });
    $(this).trigger("reset");
  });


});

// catch and handle the click on an add song button
// $('#albums').on('click', '.add-song', handleAddDelayClick);

// save song modal save button
 // $('#saveSong').on('click', handleNewSongSubmit);
 // $('#albums').on('click', '.edit-songs', handleEditSongsClick);

  function handleSuccess(success){
    success.forEach(function(i){
      renderDelay(i);
    });
};




  function handleError(err){
    console.log('There has been an error: ', err);
  }

   $('#flights').on('click', '.delete-delay', function delayDelete(){
      console.log('delete attempt');
    
   });

  // when a delete button for a delay is clicked
  function handleDeleteDelayClick(e) {
    var delayId = $(this).parents('.delay').data('delay-id');
    console.log('someone wants to delete delay id=' + delayId );
    $.ajax({
      url: '/api/delays/' + delayId,
      method: 'DELETE',
      success: handleDeleteAlbumSuccess
    });
  }

  // callback after DELETE /api/delays/:id
  function handleDeleteAlbumSuccess(data) {
    var deletedAlbumId = data._id;
    console.log('removing the following delay from the page:', deletedDelayId);
    $('div[data-delay-id=' + deletedDelayId + ']').remove();
  }




function renderDelay(delay) {
  console.log('rendering delay', delay);

  var delayHtml = (`
    <div class="row album" id="${delay._id}" data-delay-id="${delay._id}">
    <form id="${delay._id}-update" action="#" onsubmit="return false" method="PUT" class="delay-update-form" name="${delay._id}-update">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin delay internal row -->
            <div class='row'>
              <div class="col-md-3 col-xs-12 thumbnail delay-art">
                <img src=${delay.image} alt="delay image">
              </div>
              <div class="col-md-6 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Flight Number:</h4>
                    <span id="${delay._id}-flightNumber" class='delayData'>${delay.flightNumber}</span>
                    <span id="${delay._id}-flightNumber-input-span" class='delayInput'>
                      <input id="${delay._id}-flightNumber-input" type="text" name="flightNumber" value="${delay.flightNumber}" required>
                    </span>
                  </li>
                  <li class="list-group-item">
                  <h4 class='inline-header'>Origin:</h4>
                  <span id="${delay._id}-destination" class='delayData'>${delay.origin}</span>
                  <span id="${delay._id}-destination-input-span" class='delayInput'>
                  <input id="${delay._id}-destination-input" type="text" name="Origin" value="${delay.origin}" required>
                  </span>
                  </li>
                  <li class="list-group-item">
                  <h4 class='inline-header'>Destination:</h4>
                  <span id="${delay._id}-destination" class='delayData'>${delay.destination}</span>
                  <span id="${delay._id}-destination-input-span" class='delayInput'>
                  <input id="${delay._id}-destination-input" type="text" name="destination" value="${delay.destination}" required>
                  </span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Time Delayed:</h4>
                    <span id="${delay._id}-timeDelay" class='delayData'>${delay.timeDelayed}</span>
                    <span id="${delay._id}-timeDelay-input-span" class='delayInput'>
                      <input id="${delay._id}-timeDelay-input" type="text" name="timeDelay" value="${delay.timeDelayed}" required>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of delay internal row -->
            <div class='panel-footer'>
              <button class='btn btn-primary edit-delay edit'>Edit Delay</button>
              <button class='btn btn-primary save-delay edit'>Save Changes</button>
              <button class='btn btn-primary delete-delay'>Delete Delay</button>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  <!-- end one delay -->
  `);
  $('#flights').append(delayHtml);
};

$('#flights').on('click', '.edit-delay', function(e) {
  console.log('edit');
  var id= $(this).closest('.delay').data('delay-id');
  var selectorId = `#${id}`,
  selectorIdAirline = `${selectorId} .delayInput`,
  selectorIdFlightNumber = `${selectorId} .delayData`,
  selectorIdSaveDelay = `${selectorId} .save-delay`,
  selectorIdEditDelay = `${selectorId} .edit-delay`;

  $(selectorIdAirline).css("display","inline");
  $(selectorIdFlightNumber).css("display","none");
  $(selectorIdSaveDelay).css("display","inline");
  $(selectorIdEditDelay).css("display","none");



});
