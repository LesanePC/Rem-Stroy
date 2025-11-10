$(document).ready(function() {
  var btnUp = $('.footer-up');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      btnUp.fadeIn();
    } else {
      btnUp.fadeOut();
    }
  });

  btnUp.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 'slow');
  });
});
