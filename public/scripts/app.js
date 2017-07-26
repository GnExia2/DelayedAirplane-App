$(document).ready(function(){
  console.log('sanity check');
  $(".dropdown-toggle").dropdown();
  $.ajax({
    method: 'GET',
    url: '/api/delays',
    success: handleSuccess,
    error: handleError
});


  function handleSuccess(data){
    console.log(res.json(data))
    renderDelay(delay);
  };

  function handleError(err){
    console.log('There has been an error: ', err);

  }


function renderDelay(delay) {
  console.log("this is working");
  console.log('rendering delays', delay);

  var delayHtml = (`
    <div class="row album" id="${delay._id}" data-delay-id="${delay._id}">
    <form id="${delay._id}-update" action="#" onsubmit="return false" method="PUT" class="delay-update-form" name="${delay._id}-update">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin delay internal row -->
            <div class='row'>
              <div class="col-md-3 col-xs-12 thumbnail delay-art">
                <img src=${delay.id}- alt="delay image">
              </div>
              <div class="col-md-9 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Airline:</h4>
                    <span id="${delay._id}-Airline" class='delayData'>${delay.Airline}</span>
                    <span id="${delay._id}-Airline-input-span" class='delayInput'>
                      <input id="${delay._id}-Airline-input" type="text" name="Airline" value="${delay.Airline}" size="${delay.Airline.length}" required>
                    </span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Flight Number:</h4>
                    <span id="${delay._id}-FlightNumber" class='delayData'>${delay.FlightNumber}</span>
                    <span id="${delay._id}-FlightNumber-input-span" class='delayInput'>
                      <input id="${delay._id}-FlightNumber-input" type="text" name="FlightNumber" size="${delay.FlightNumber.length}" value="${delay.FlightNumber}" required>
                    </span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Time Delayed:</h4>
                    <span id="${delay._id}-TimeDelay" class='delayData'>${delay.TimeDelay}</span>
                    <span id="${delay._id}-TimeDelay-input-span" class='delayInput'>
                      <input id="${delay._id}-TimeDelay-input" type="text" name="TimeDelay"  size="${delay.TimeDelay.length}" value="${delay.TimeDelay}" required>
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
