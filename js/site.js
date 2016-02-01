(function() {
  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  $('.portfolio-box').click(function(evt) {
    evt.preventDefault();
  });
})();
