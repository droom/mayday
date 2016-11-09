$(document).ready(function() {

	localStorage.contents;

	function fContents(){
		if (localStorage.contents === "contentsTile"){
			$('ul#contents').addClass('tile');
			$('a#contents .unit').addClass('list');
		} else {
			$('ul#contents').removeClass('tile');
			$('a#contents .unit').removeClass('list');
		};
	};

	$('a#contents').click(function(e) {
		e.preventDefault();
		$('a#contents .unit').toggleClass('list');
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






