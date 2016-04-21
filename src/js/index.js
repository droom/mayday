$(document).ready(function() {

	var worklist = $('ul.work-list li')
	console.log( worklist );

	$( "a.plain" ).each(function( index ) {
		console.log( index + ": " + $(this).val );
	});

});