$( document ).ready(function() {





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
    $('body.work.iso a.move.move-right').css('margin-right', scrollbarWidth);
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
