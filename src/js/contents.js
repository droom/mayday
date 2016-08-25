$(document).ready(function() {

	localStorage.contents;

	function fContents(){
		if (localStorage.contents === "contentsTile"){
			$('ul#work').addClass('tile');
			$('a#view .unit').addClass('list');
		} else {
			$('ul#work').removeClass('tile');
			$('a#view .unit').removeClass('list');
		};
	};

	$('a#view').click(function(e) {
		e.preventDefault();
		$('a#view .unit').toggleClass('list');
		$('ul#work').toggleClass('tile');

		if ($('ul#work').hasClass('tile')){
			localStorage.contents = "contentsTile";
		} else {
			localStorage.contents = "list";
		};

		console.log(localStorage.contents);

	});




	fContents();




});






