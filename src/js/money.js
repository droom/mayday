$(document).ready(function() {

	var noteArray = [];
	var noteTotal = 0;
	var noteCount = 0;

	$(".note").click(function() {

		var turnMax = 10;
		var turnMin = -10;
		var turnRandom = Math.floor(Math.random() * (turnMax - turnMin + 1)) + turnMin;

		var value = parseInt($(this).data("value"));
		var type = parseInt($(this).data("type"));
		noteArray.push(value);
		noteTotal = noteTotal + value;
		updatePot();
		noteCount++;

		$(".notes").append("<div class=\"note note-" + type + "\" data-add=\"" + type + "\" data-count=\"" + noteCount + "\"></div>");

		var latest = $("[data-count=\"" + noteCount + "\"]");

		$(latest).css('-webkit-transform', 'rotate(' + turnRandom + 'deg)');

	});

	$(".pot").click(function() {

		if (noteArray.length > 0) {
			noteTotal = noteTotal - noteArray.slice(-1)[0];
			noteArray.pop();
			updatePot();
		} else {
			console.log("There's no money on the pot");
		}

		var latest = $("[data-count=\"" + noteCount + "\"]");
		var latestData = parseInt($(latest).data("add"));
		latest.attr('data-return', latestData);
		setTimeout(function() {
			latest.remove();
		}, 400);
		if (noteCount > 0) {
			noteCount--;
		}

	});

	function updatePot() {
		$('.total').text(noteTotal);
	}


});





