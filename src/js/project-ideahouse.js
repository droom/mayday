$('a.desktop').click(function(e) {
	e.preventDefault();
	// console.log("hey!");
	$('a.desktop').addClass('active');
	$('a.mobile').removeClass('active');

	$('#layout').addClass('desktop');
	$('#layout').removeClass('mobile');
});


$('a.mobile').click(function(e) {

	// console.log("yo!");
	e.preventDefault();
	$('a.mobile').addClass('active');
	$('a.desktop').removeClass('active');

	$('#layout').addClass('mobile');
	$('#layout').removeClass('desktop');

});