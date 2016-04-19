$(document).ready(function() {

  var worklist = $('ul.work-list li')

  // var workLinks = worklist.find("a");
  // console.log("worklist", worklist);
  // console.log("workLinks", workLinks);

  $( "a.plain" ).each(function( index ) {
    console.log( index + ": " + $(this).val );
  });

});