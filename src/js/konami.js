$(document).ready(function() {

	function flash(){
		var $div = $("<div>", {"class": "flash"});
		$("body").append($div);
	}

	console.log("konami load");
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'audio/22H.wav');
	// audioElement.setAttribute('autoplay', 'autoplay');
	audioElement.load();
	// $.get();
	// audioElement.addEventListener("load", function() {
	// 	audioElement.play();
	// }, true);

	if (localStorage.konami === "true"){
		$( "html" ).addClass('konami');
	};


	var easter_egg = new Konami(function() { 

		if (localStorage.konami !== "true"){
			console.log('konami fire');
			$("html").addClass("konami");

			flash();
			localStorage.konami = "true";
			audioElement.play();
			return;

		};


	});

	$(document).keyup(function(e) {
		if (e.keyCode === 27){ 
			console.log('escape');
			$( "html" ).removeClass('konami');
			flash();
			localStorage.konami = "false";
		}
	});

});