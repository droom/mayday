$(document).ready(function() {
	function cover(){
		var hWindow       =  $(window).height();
		var wWindow       =  $(window).width();
		var hBellyTitle   =  $('.cover-title').height();
		var hBellyAside   =  $('.cover-aside').height();
		var hBellyPhoto   =  $('.cover-photo').height();
		var hCombined     =  parseInt(hBellyTitle + hBellyAside + hBellyPhoto);
		var hSum          =  hWindow - parseInt(hBellyTitle + hBellyAside);
		var hSup 		  =  parseInt(hWindow - hBellyTitle);

		if (wWindow > 585) {
			$('.cover-photo').css('height', hSup);
		} else {
			$('.cover-photo').css('height', hSum);
		}
	}


	$(window).resize(function() {
		cover();
	});


	cover();

});





