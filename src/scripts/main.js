$(document).ready(function() {

    $('.news').masonry({
      });

    $('.burger__btn').on('click', function(){
      $('.burger').toggleClass('burger__open');
    });

});