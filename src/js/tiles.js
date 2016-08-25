$(document).ready(function() {

	localStorage.contents;

	function fContents(){
		if (localStorage.contents === "tiles"){
			$('ul#work').addClass('tile');
		} else {
			$('ul#work').removeClass('tile');
		};
	};

	$('#view').click(function(e) {
		e.preventDefault();
		$('#view .unit').toggleClass('list');
		$('ul#work').toggleClass('tile');

		if ($('ul#work').hasClass('tile')){
			localStorage.contents = "tiles";
		} else {
			localStorage.contents = "list";
		};

		console.log(localStorage.contents);

	});




	fContents();




});






