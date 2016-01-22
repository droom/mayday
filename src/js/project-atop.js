$( document ).ready(function() {


  if (top.location.pathname === '/Users/droom/GIT/ucl/dist/work-atop.html')
  {

    var theDate = new Date();
    var hours24 = theDate.getHours();
    var minutes = theDate.getMinutes();
    var hours12 = ((hours24 + 11) % 12 + 1);
    var minutesDecimal = (minutes / 100);
    var hours24andminutes = hours12 + minutesDecimal;
    var deg = (hours24andminutes * 30);
    var degMinutes = (minutes * 6);
    var day = (hours24 * 15);

    var theDate = new Date();
    var seconds = theDate.getSeconds();
    var secondsConv = (seconds * 6);

    // console.log("hours24 is "+hours24);
    // console.log("hours12 is "+hours12);
    // console.log("deg is "+deg);
    // console.log("minutes is "+minutes);
    // console.log("minutesDecimal is "+minutesDecimal);
    // console.log("degMinutes is "+degMinutes);
    // console.log("hours24andminutes is "+hours24andminutes);
    // console.log("day is "+day);

    function hello(){
      var theDate = new Date();
      var seconds = theDate.getSeconds();
      var secondsConv = (seconds * 6);

      console.log("seconds is "+seconds);
      console.log("secondsConv is "+secondsConv);

      $(".seconds").css("transform", "rotate("+secondsConv+"deg)");

    }
    setInterval(hello, 1000);


    function setTime(){
      $(".hand-small").css("transform", "rotate("+deg+"deg)");
      $(".hand-large").css("transform", "rotate("+degMinutes+"deg)");
      $(".day").css("transform", "rotate("+day+"deg)");
      $(".seconds").css("transform", "rotate("+secondsConv+"deg)");

    }


  // waypoints
  var waypoint = new Waypoint({
    element: document.getElementById('basic-waypoint'),
    handler: function() {
      console.log('waypoint');
      setTime();
    },
    offset: 300
  })


  }











});
