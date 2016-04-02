$( document ).ready(function() {

  if (top.location.pathname === '/Users/droom/GIT/mayday/dist/project-atop.html')
  {

    var theDate = new Date();
    var hours24 = theDate.getHours();
    var hours12 = ((hours24 + 11) % 12 + 1);

    var minutes = theDate.getMinutes();
    var minutesDecimal = (minutes / 100);
    var hours24andminutes = hours12 + minutesDecimal;
    var deg = (hours24andminutes * 30);
    var degMinutes = (minutes * 6);
    var day = (hours24 * 15);

    function setTime(){
      $(".hand-small").css("transform", "rotate("+deg+"deg)");
      $(".hand-large").css("transform", "rotate("+degMinutes+"deg)");
      $(".day").css("transform", "rotate("+day+"deg)");
    }

  // waypoints
  var waypoint = new Waypoint({
    element: document.getElementById('waypoint-atop'),
    handler: function() {
      console.log('waypoint');
      setTime();
    },
    offset: 300
  })
}



var hello2 = new Waypoint({
  element: document.getElementById('what'),
  handler: function(direction) {
    console.log('I am 20px from the top of the window')
    $(".band.head.relative.unselect.hello").css("top", "0px");
  }
})













});
