jQuery(document).ready(function($){

	$('.grid').isotope({ filter: ':not(.reopen)' });

	$('.gogetter .tick.tick-1').click(function(){
		$(this).toggleClass('set');
		$('.poster .tick.tick-1').toggleClass('set');
	});

	$('.gogetter .tick.tick-2').click(function(){
		$(this).toggleClass('set');
		$('.poster .tick.tick-2').toggleClass('set');
	});

	$('.gogetter .tick.tick-3').click(function(){
		$(this).toggleClass('set');
		$('.poster .tick.tick-3').toggleClass('set');
	});

	$('.gogetter .tick.tick-4').click(function(){
		$(this).toggleClass('set');
		$('.poster .tick.tick-4').toggleClass('set');
	});


	$('button.finished').click(function(){
		$( ".joinery" ).addClass( "collapsed" );
	});

	$('button.reopen').click(function(){
		$( ".joinery" ).removeClass( "collapsed" );
	});



});