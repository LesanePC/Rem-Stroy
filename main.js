$(function() {

  var btnUp = $('.footer-up');

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 300) {
      btnUp.fadeIn(300);
    } else {
      btnUp.fadeOut(300);
    }
  });

  btnUp.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 800, 'swing');
  });

});