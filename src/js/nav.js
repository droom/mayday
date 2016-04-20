$(document).ready(function() {


  $('a.move-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300, 'easeOutExpo');
        return false;
      }
    }
  });


  var returnShow = new Waypoint({
    element: document.getElementById('checkpoint-nav'),
    handler: function(direction) {
      $("#top").addClass("show");
    }, offset: 0
  });


  var returnHide = new Waypoint({
    element: document.getElementById('checkpoint-nav'),
    handler: function(direction) {
      $("#top").removeClass("show");
    }, offset: 56
  });



});