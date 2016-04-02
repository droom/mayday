$( document ).ready(function() {

	function cover(){
	// console.log( 'window is ' + $(window).height() )
	// console.log( '.belly-title is ' + $('.belly-title').height() )
	// console.log( '.belly-aside is ' + $('.belly-aside').height() )

	var hWindow       =  $(window).height();
	var wWindow       =  $(window).width();
	var hBellyTitle   =  $('.belly-title').height();
	var hBellyAside   =  $('.belly-aside').height();
	var hBellyPhoto   =  $('.belly-photo').height();

	var hCombined     =  parseInt(hBellyTitle + hBellyAside + hBellyPhoto);

	var hSum          =  hWindow - parseInt(hBellyTitle + hBellyAside);
	var hSup 		  =  parseInt(hWindow - hBellyTitle);

	console.log( 'wWindow', wWindow );
	// console.log( 'hCombined', hCombined );


	if (wWindow > 600) {
		$('.belly-photo').css('height', hSup);
	} else {
		$('.belly-photo').css('height', hSum);
	}


}



$( window ).resize(function() {
	cover();
});



cover();


});




