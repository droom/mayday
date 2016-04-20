$(document).ready(function() {

  var worklist = $('ul.work-list li')

  $( "a.plain" ).each(function( index ) {
    console.log( index + ": " + $(this).val );
  });

});