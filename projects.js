$(document).on('click', '.img-box img', function(e) {
  e.stopPropagation();

  $('.gallery-modal').remove();

  const modal = $(`
    <div class="gallery-modal">
      <img src="${$(this).attr('src')}" class="modal-img">
      <button class="modal-close">×</button>
    </div>
  `);

  $('body').append(modal);

  requestAnimationFrame(() => {
    modal.addClass('active');
  });
});

$(document).on('click', '.gallery-modal, .modal-close', function(e) {

  const modal = $(this).closest('.gallery-modal');

  if (e.target === this || $(e.target).hasClass('modal-close')) {

    modal.removeClass('active');

    setTimeout(() => {
      modal.remove();
    }, 300);
  }
});

$(document).on('keydown', function(e) {
  if (e.key === "Escape") {
    $('.gallery-modal').removeClass('active');

    setTimeout(() => {
      $('.gallery-modal').remove();
    }, 300);
  }
});