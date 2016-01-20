$( document ).ready(function() {

  // console.log(window.location.pathname);
  // console.log($(location).attr('href'));

  // $( "a.back" ).click(function( event ) {
  //   event.preventDefault();
  //   history.go(-1);
  // });

  // $('a').css({'cursor': 'url(/cursors/customMoveCursor.cur), default'});


  $( "a" ).click(function(event ) {
    $('body').fadeOut(150);
  });


});
