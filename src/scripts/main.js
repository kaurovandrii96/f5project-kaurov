$(document).ready(function() {

    $('.news').masonry({
      });

    $('.burger').on('click', function (a) {
      a.preventDefault;
      $(this).toggleClass('burger__close');
      $('.header-nav').toggleClass('burger__menu-right');
    })

});

function initMap() {
  var uluru = {lat: 51.275324, lng: 30.2043759};
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 10, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}