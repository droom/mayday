$(document).on('ready', function() {

	var protoBegin = false;

	$('.container').mixItUp({
		load: {
			filter: '.open'
		},
		controls: {
			toggleFilterButtons: false
		}
	});

	// $('.tick-btn.tick-3 a.filter').css('display', 'none');

	$('.tick-btn.tick-1').click(function(e) {
		e.preventDefault();
		$('.tick-btn.tick-1').children().toggleClass('set');
		$('.terminal-a').toggleClass('set');
		protoBegin = !protoBegin;
	});

	$('.tick-btn.tick-2').click(function(e) {
		e.preventDefault();
		$('.tick-btn.tick-2').children().toggleClass('set');
		$('.terminal-b').toggleClass('set');
	});

	$('.tick-btn.tick-3').click(function(e) {
		e.preventDefault();
		$('.tick-btn.tick-3').children().toggleClass('set');
		$('.terminal-c').toggleClass('set');
		$('.container').addClass('review');
	});


	$('.reopen-btn').click(function(e) {
		e.preventDefault();
		$('.tick-btn.tick-3 img').removeClass('set');
		$('.terminal-c').toggleClass('set');
		$('.container').removeClass('review');
	});


});


