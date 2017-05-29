$(document).on('ready', function() {

	$('.container').mixItUp({
		load: {
			filter: '.open'
		},
		controls: {
			toggleFilterButtons: false
		}
	});

	var tick1btn = $('.tick-btn.tick-1#tick-1');
	var tick2btn = $('.tick-btn.tick-2#tick-2');
	var tick3btn = $('.tick-btn.tick-3#tick-3');
	var tick4btn = $('.tick-btn.tick-4#tick-4');

	var reopenbtn = $('#reopen-btn');

	var tick1 = $('.tick-btn.tick-1');
	var tick2 = $('.tick-btn.tick-2');
	var tick3 = $('.tick-btn.tick-3');
	var tick4 = $('.tick-btn.tick-4');

	var term1 = $('.terminal-a');
	var term2 = $('.terminal-b');
	var term3 = $('.terminal-c');
	var term4 = $('.terminal-d');

	var tickFilter = $('.tick-btn.tick-3#tick-3 img');

	tick1.addClass('enabled');
	tickFilter.css('display', 'none');



	$('.tick-btn').click(function(e) {
		e.preventDefault();
	});

	$('.reopen-btn').click(function(e) {
		e.preventDefault();
	});





	function fStage1Enable(){
		tick1.addClass('enabled');
	};

	function fStage1Disable(){
		tick1.removeClass('enabled');
	};

	function fStage1Set(){
		tick1.children().addClass('set');
		term1.addClass('set');
	};
	function fStage1UnSet(){
		tick1.children().removeClass('set');
		term1.removeClass('set');
	};



	function fStage2Enable(){
		tick2.addClass('enabled');
	};

	function fStage2Disable(){
		tick2.removeClass('enabled');
	};
	
	function fStage2Set(){
		tick2.children().addClass('set');
		term2.addClass('set');
	};
	function fStage2UnSet(){
		tick2.children().removeClass('set');
		term2.removeClass('set');
	};

	function fStage3Enable(){
		tick3.addClass('enabled');
		tickFilter.css('display', 'block');
	};

	function fStage3Disable(){
		tick3.removeClass('enabled');
		tickFilter.css('display', 'none');
	};

	function fStage3Set(){
		tick3.children().addClass('set');
		term3.addClass('set');
	};

	function fStage3UnSet(){
		tick3.children().removeClass('set');
		term3.removeClass('set');
	};

	function fStage4Enable(){
		tick4.addClass('enabled');
	};

	function fStage4Disable(){
		tick4.removeClass('enabled');
	};

	function fStage4Set(){
		tick4.children().addClass('set');
		term4.addClass('set');
	};
	function fStage4UnSet(){
		tick4.children().removeClass('set');
		term4.removeClass('set');
	};



	function fUpdateJob(){
		if (jobState === 0){
			fStage1UnSet();
			fStage2UnSet();
			fStage3UnSet();
			fStage4UnSet();

			fStage1Enable();
			fStage2Disable();
			fStage3Disable();
			fStage4Disable();

		}

		if (jobState === 1){
			fStage1Set();
			fStage2UnSet();
			fStage3UnSet();
			fStage4UnSet();

			fStage1Enable();
			fStage2Enable();
			fStage3Disable();
			fStage4Disable();

		}


		if (jobState === 2){
			fStage1Set();
			fStage2Set();
			fStage3UnSet();
			fStage4UnSet();

			fStage1Enable();
			fStage2Enable();
			fStage3Enable();
			fStage4Disable();

			$('.container').removeClass('review');

		}


		if (jobState === 3){
			fStage1Set();
			fStage2Set();
			fStage3Set();
			fStage4UnSet();
			fStage1Enable();
			fStage2Enable();
			fStage3Enable();
			fStage4Enable();

			$('.container').addClass('review');

		}


		if (jobState === 4){
			fStage1Set();
			fStage2Set();
			fStage3Set();
			fStage4Set();
			fStage1Enable();
			fStage2Enable();
			fStage3Enable();
			fStage4Enable();

		}
	};


	var jobState = 0;


	$(tick1btn).click(function() {
		if (jobState === 0){
			jobState = 1;
		} else {
			jobState = 0;
		}
		fUpdateJob();
	});


	$(tick2btn).click(function() {
		if (jobState === 1){
			jobState = 2;
		} 
		else if (jobState === 2){
			jobState = 1;
		}
		fUpdateJob();
	});


	$(tick3btn).click(function() {
		if (jobState === 2){
			jobState = 3;
		} 
		else if (jobState === 3){
			jobState = 2;
		}
		fUpdateJob();
	});


	$(reopenbtn).click(function() {
		jobState = 2;
		fUpdateJob();
	});


	$(tick4btn).click(function() {
		if (jobState === 3){
			jobState = 4;
		} 
		else if (jobState === 4){
			jobState = 3;
		}
		fUpdateJob();
	});



});


