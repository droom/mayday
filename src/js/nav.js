$( document ).ready(function() {
  $( "a.back" ).click(function( event ) {
    event.preventDefault();
    history.go(-1);
  });
});
