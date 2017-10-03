document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
var step1 = document.querySelector('#step12')
var step2 = document.querySelector('#step3456')
var step7 = document.querySelector('#step7')
var step8 = document.querySelector('#step8');
var step9 = document.querySelector('#step9')
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
    dataType: 'text'
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

step7.addEventListener('click',function() {
  $.ajax({
    url:"http://first-ajax-api.herokuapp.com/count",
    method:'GET',
    dataType: 'text'
  }).done( function(responseData) {
    console.log("Request succesfully completed!");
    console.log(responseData);
    var dataWrapper = document.createElement('p');
    dataWrapper.innerHTML = responseData;
    step7.appendChild(dataWrapper);
  }).fail(function(jqXR, textStatus,errorThrown) {
    console.log("Request failed!");
    console.log( textStatus, errorThrown);
    var error = document.createElement('p');
    error.innerHTML = 'Sorry we could not load your page! We will try harder next time';
    step7.appendChild(error);
  }).always(function() {
    console.log("Hey the request finished!");
  });
});

step8.addEventListener('click',function() {
  $.ajax({
    url:"http://first-ajax-api.herokuapp.com/time",
    method:'GET',
    dataType: 'text',
    data: {timezone: 'Pacific/Honolulu'}
  }).done( function(responseData) {
    console.log("Request succesfully completed!");
    console.log(responseData);
    var dataWrapper = document.createElement('p');
    dataWrapper.innerHTML = responseData;
    step8.appendChild(dataWrapper);
  }).fail(function(jqXR, textStatus,errorThrown) {
    console.log("Request failed!");
    console.log( textStatus, errorThrown);
    var error = document.createElement('p');
    error.innerHTML = 'Sorry we could not load your page! We will try harder next time';
    step8.appendChild(error);
  }).always(function() {
    console.log("Hey the request finished!");
  });
});

step9.addEventListener('click',function() {
  $.ajax({
    url:"http://first-ajax-api.herokuapp.com/a_car",
    method:'GET',
    dataType: 'text',
  }).done( function(responseData) {
    console.log("Request succesfully completed!");
    console.log(responseData);
    var carList = document.createElement('ul');
    carList.setAttribute('id','cars')
    carList.innerHTML = responseData;
    step9.appendChild(carList);
  }).fail(function(jqXR, textStatus,errorThrown) {
    console.log("Request failed!");
    console.log( textStatus, errorThrown);
    var error = document.createElement('ul');
    error.innerHTML = 'Sorry we could not load your page! We will try harder next time';
    step9.appendChild(error);
  }).always(function() {
    console.log("Hey the request finished!");
  });
});

});
