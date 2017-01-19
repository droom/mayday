$(document).ready(function() {

	localStorage.menu;

	var menu		= $('ul#menu')
	var button		= $('a#menu-btn-img')
	var buttonUnit	= $('a#menu-btn-img .unit')


	function fContents(){
		if (localStorage.menu === "tile"){
			menu.addClass('tile');
			buttonUnit.addClass('rotate');

		} else {
			menu.removeClass('tile');
			buttonUnit.removeClass('rotate');
			
		};
	};

	fContents();

	$(button).click(function(e) {
		e.preventDefault();

		buttonUnit.toggleClass('rotate');
		menu.toggleClass('tile');

		if (menu.hasClass('tile')){
			localStorage.menu = "tile";
		} else {
			localStorage.menu = "list";
		};
		
		console.log(localStorage.menu);

	});


});






