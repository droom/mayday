$(document).ready(function() {

	console.log('reflow');

	$('a.reflow.before').click(function(e) {
		e.preventDefault();
		fBefore();
		console.log('reflow click');
	});

	$('a.reflow.after').click(function(e) {
		e.preventDefault();
		fAfter();
	});

	function fBefore(){
		$('a.reflow.before').addClass('active');
		$('a.reflow.after').removeClass('active');
		$('#reflow').addClass('before');
		$('#reflow').removeClass('after');
	};

	function fAfter(){
		$('a.reflow.after').addClass('active');
		$('a.reflow.before').removeClass('active');
		$('#reflow').addClass('after');
		$('#reflow').removeClass('before');
	};

});