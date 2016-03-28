$( document ).ready(function() {


  var noto = new FontFaceObserver('Noto Serif');

  noto.load(null, 5000).then(function () {
    $('body').addClass('noto')
  }, function () {
    console.log('Font is not available after waiting 5 seconds');
  });


  var circ = new FontFaceObserver('CircularStd-Bold');

  circ.load(null, 5000).then(function () {
    $('body').addClass('circular')
  }, function () {
    console.log('Font is not available after waiting 5 seconds');
  });




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
// Get the scrollbar width
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
console.warn(scrollbarWidth); // Mac:  15
// Delete the DIV
document.body.removeChild(scrollDiv);
  // moves out of scrollbar's way
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





  // console.log(window.location.pathname);
  // console.log($(location).attr('href'));
  // $( "a.back" ).click(function( event ) {
  //   event.preventDefault();
  //   history.go(-1);
  // });
// localStorage.company = $('#company').val();
// localStorage.currency = $('#currency').val();
// localStorage.salutation = $('#salutation').val();
 // console.log("localStorage called");
 // var workArray =  $( "dd.project.h3" );
 // console.log("workArray is "+ workArray);
 // console.log("localStorage.auth is "+localStorage.auth);
 // function pageState(){
 //   console.log("localStorage.auth is "+localStorage.auth);
 //   localStorage.name = $('#name').val();
 //   localStorage.company = $('#company').val();
 //   localStorage.currency = $('#currency').val();
 //   localStorage.salutation = $('#salutation').val();
 //   localStorage.language = $('#language').val();
 //   localStorage.telephone = $('#telephone').val();
 //   localStorage.state = $('#state').val();
 // }
