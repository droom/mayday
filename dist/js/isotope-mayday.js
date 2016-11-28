jQuery(document).ready(function($){


	$('.grid').isotope({ filter: ':not(.reopen)' });


	var ggTick1 = $('.gogetter .tick.tick-1');
	var ggTick2 = $('.gogetter .tick.tick-2');
	var ggTick3 = $('.gogetter .tick.tick-3');
	var ggTick4 = $('.gogetter .tick.tick-4');

	var psTick1 = $('.poster .tick.tick-1');
	var psTick2 = $('.poster .tick.tick-2');
	var psTick3 = $('.poster .tick.tick-3');
	var psTick4 = $('.poster .tick.tick-4');

	var stage1 = false;
	var stage2 = false;
	var stage3 = false;
	var stage4 = false;


	function state(button){
		console.log("1:"+stage1);
		console.log("2:"+stage2);
		console.log("3:"+stage3);
		console.log("4:"+stage4);
		$(button).toggleClass('set');
	}



	$(ggTick1).click(function(){
		stage1 = !stage1;
		$(ggTick1).toggleClass('set');
		$(psTick1).toggleClass('set');
		state();
	});


	$(ggTick2).click(function(){
		stage2 = !stage2;
		$(ggTick2).toggleClass('set');
		$(psTick2).toggleClass('set');
		state();
	});



});