$(function() {

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top - 90 }, 800);
    }
  });

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    $('.section, .contacts, .intro').each(function () {
      var top = $(this).offset().top - 100;

      if (scroll >= top) {
        $('.menu li').removeClass('active');
        $('.menu a[href="#' + $(this).attr('id') + '"]')
          .parent()
          .addClass('active');
      }
    });
  });

});