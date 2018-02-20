import $ from '../node_modules/jquery/dist/jquery.min.js';

$(function () {
  $(".lightsaber-button").click(function () {
    $(".lightsaber-blade").animate({
      width: "toggle"
    });
  });

  $(".lightsaber-button").click();

  $('nav a').click(function () {
    let section = this.className;

    $('nav a').each(function (element) {
      $('main div').hide();
      $(this).removeClass('active');
    });

    $(`#${section}`).show();
    $(`.${section}`).addClass('active');
  });
});
