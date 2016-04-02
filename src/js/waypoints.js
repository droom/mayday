$( document ).ready(function() {

  var hello3 = new Waypoint({
    element: document.getElementById('what'),
    handler: function(direction) {
      console.log('I am 20px from the top of the window')
      $("#return").css("top", "0");
      $("#return").css("opacity", "1");
    }, offset: 0
  })

  var hello4 = new Waypoint({
    element: document.getElementById('what'),
    handler: function(direction) {
      console.log('I am 20px from the top of the window')
      $("#return").css("top", "-70px");
      $("#return").css("opacity", "0");
    }, offset: 1
  })

});




