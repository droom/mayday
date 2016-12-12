$(document).ready(function() {

	localStorage.contents;

	function fContents(){
		if (localStorage.contents === "contentsTile"){
			$('ul#contents').addClass('tile');
			$('a#contents-btn .unit').addClass('list');
		} else {
			$('ul#contents').removeClass('tile');
			$('a#contents-btn .unit').removeClass('list');
		};
	};

	$('a#contents-btn').click(function(e) {
		e.preventDefault();
		$('a#contents-btn .unit').toggleClass('list');
		$('ul#contents').toggleClass('tile');

		if ($('ul#contents').hasClass('tile')){
			localStorage.contents = "contentsTile";
		} else {
			localStorage.contents = "list";
		};

		console.log(localStorage.contents);

	});




	fContents();




});






