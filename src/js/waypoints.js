$( document ).ready(function() {

  var returnShow = new Waypoint({
    element: document.getElementById('what'),
    handler: function(direction) {
      $("#level-up").css("top", "0");
      $("#level-up").css("opacity", "1");
    }, offset: 0
  })

  var returnHide = new Waypoint({
    element: document.getElementById('what'),
    handler: function(direction) {
      $("#level-up").css("top", "-70px");
      $("#level-up").css("opacity", "0");
    }, offset: 1
  })

});


