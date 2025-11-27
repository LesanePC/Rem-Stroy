$(document).ready(function() {
  // 1. КНОПКА НАВЕРХ
  var btnUp = $('.footer-up');
  
  $(window).scroll(function() {
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

  // 2. ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ МЕНЮ 
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 90
      }, 800);
    }
  });

  // 3. АКТИВНОЕ МЕНЮ ПРИ ПРОКРУТКЕ
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.section, .contacts, .intro').each(function() {
      var top = $(this).offset().top - 100;
      if (scroll >= top) {
        $('.menu li').removeClass('active');
        $('.menu a[href="#' + $(this).attr('id') + '"]')
          .parent().addClass('active');
      }
    });
  });
});
