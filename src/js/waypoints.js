$( document ).ready(function() {

  var returnShow = new Waypoint({
    element: document.getElementById('what'),
    handler: function(direction) {
      $("#top").addClass("show");
    }, offset: 0
  })

  var returnHide = new Waypoint({
    element: document.getElementById('what'),
    handler: function(direction) {
      $("#top").removeClass("show");
    }, offset: 1
  })

});


