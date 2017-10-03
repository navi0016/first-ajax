document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
var step1 = document.querySelector('#step12')
var step2 = document.querySelector('#step3456')


step1.addEventListener('click',function() {
  $.ajax({
    url:"http://first-ajax-api.herokuapp.com/",
    method:'GET',
    dataType: 'text',
    data: {}
  }).done( function(data) {
    console.log("Request succesfully completed!");
    console.log(data);
  }).fail(function(jqXR, textStatus,errorThrown) {
    console.log("Request failed!");
    console.log( textStatus, errorThrown);
  });
});

step2.addEventListener('click',function() {
  $.ajax({
    url:"http://first-ajax-api.herokuapp.com/ping",
    method:'GET',
    dataType: 'text',
    // data:
  }).done( function(data) {
    console.log("Request succesfully completed!");
    console.log(data);
    var dataWrapper = document.createElement('p');
    dataWrapper.innerHTML = data;
    step2.appendChild(dataWrapper);
  }).fail(function(jqXR, textStatus,errorThrown) {
    console.log("Request failed!");
    console.log( textStatus, errorThrown);
    var error = document.createElement('p');
    error.innerHTML = 'Sorry we could not load your page! We will try harder next time';
    step2.appendChild(error);
  }).always(function() {
    console.log("Hey the request finished!");
  });
});



});
