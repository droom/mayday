$( document ).ready(function() {


  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({

            scrollTop: target.offset().top
          }, 300, 'easeOutExpo');

          $(".band.head.relative.unselect.hello").css("top", "-70px");
          
          return false;
        }
      }
    });
  });



  var hello3 = new Waypoint({
    element: document.getElementById('what'),
    handler: function(direction) {
      console.log('I am 20px from the top of the window')
      $(".band.head.relative.unselect.hello").css("top", "-70px");


    }, offset: 56
  })



  var scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  console.warn(scrollbarWidth); 
  document.body.removeChild(scrollDiv);
  if ($(document).height() > $(window).height()) {
    console.log("scrollbar present");
    $('body.work.iso .band.head.hr.relative a.move.move-right').css('margin-right', scrollbarWidth);
  }



  var project = [
  [],
  [],
  [],
  []
  ]

  var project = new Array();

  $( "ul.work-list li" ).each(function( index ) {
    project[0].push( $(this).find('.project').html() );
    project[1].push( $(this).find('.client').html() );
    project[2].push( $(this).find('.studio').html() );
    project[3].push( $(this).find('.plain').attr('href') );

    localStorage["project"] = JSON.stringify( $(this).find('.project').html() );
  });

  console.log(project);

});





