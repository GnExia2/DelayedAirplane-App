$(document).ready(function(){
  $(".dropdown-toggle").dropdown();

  $.ajax({
    method: 'GET',
    url: '/api/delays',
    success: handleSuccess,
    error: handleError
  });
});


  function handleSuccess(data){
    data.forEach(function(i){
      renderDelay(i);
    });
};

  function handleError(err){
    console.log('There has been an error: ', err);
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
              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Flight Number:</h4>
                    <span id="${delay._id}-flightNumber" class='delayData'>${delay.flightNumber}</span>
                    <span id="${delay._id}-flightNumber-input-span" class='delayInput'>
                      <input id="${delay._id}-flightNumber-input" type="text" name="flightNumber value="${delay.flightNumber}" required>
                    </span>
                  </li>
                  <li class="list-group-item">
                  <h4 class='inline-header'>airline:</h4>
                  <span id="${delay._id}-airline" class='delayData'>${delay.airline}</span>
                  <span id="${delay._id}-airline-input-span" class='delayInput'>
                  <input id="${delay._id}-airline-input" type="text" name="airline" value="${delay.airline}" required>
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
              <button class='btn btn-primary edit-delay'>Edit Delay</button>
              <button class='btn btn-primary save-delay'>Save Changes</button>
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
