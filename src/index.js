import $ from '../node_modules/jquery/dist/jquery.min.js';

$(function () {

  $('nav a').on('click touch', function () {
    let section = this.className.split(' ')[0];

    $('nav a').each(function (element) {
      $('main div').hide();
      $(this).removeClass('active');
    });

    $(`#${section}`).show();
    $(`.${section}`).addClass('active');
  });
});
