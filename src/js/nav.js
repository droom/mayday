$(document).ready(function() {

//   var upwards = false;
//   var lastScrollTop = 0;
//   $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//     upwards = true
//     console.log("upwards", upwards)
//   } else {
//     upwards = false
//     console.log("upwards", upwards)
//   }
//   lastScrollTop = st;
// });


  if ( $( "#checkpoint" ).length ) {
    var returnShow = new Waypoint({
      element: document.getElementById('checkpoint'),
      handler: function() {
        $("#top").addClass("show");
      }, offset: 0          
    });

    var returnHide = new Waypoint({
      element: document.getElementById('checkpoint'),
      handler: function() {
        $("#top").removeClass("show");
      }, offset: 56
    });
  }



  $('.glide').click(function() {
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

  $('.glide-slow').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600, 'easeOutExpo');
        return false;
      }
    }
  });







});