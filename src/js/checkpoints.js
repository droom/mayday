$(document).ready(function() {

	if ( $( "#gg-views").length) {


		var fStopInteractive1 = new Waypoint({
			element: document.getElementById('gg-views'),
			handler: function() {
				// console.log('fStop');
				$("#gg-views .hand").removeClass('play')
			}, offset: 160
		});


		var fPlayInteractive = new Waypoint({
			element: document.getElementById('gg-views'),
			handler: function() {
				// console.log('fPlay');
				$("#gg-views .hand").addClass('play')
			}, offset: 150
		});


		var fStopInteractive2 = new Waypoint({
			element: document.getElementById('gg-views'),
			handler: function() {
				// console.log('fStop');
				$("#gg-views .hand").removeClass('play')
			}, offset: -100
		});



	}

});