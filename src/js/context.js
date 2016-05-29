$(document).ready(function() {


	if (localStorage.context === "backwards"){
		$( "#context" ).addClass('right');
	};

	if (localStorage.context === "forwards"){
		$( "#context" ).addClass('left');
	};

	if (localStorage.context === "upwards"){
		$( "#context" ).addClass('up');
	};

	if (localStorage.context === "normal"){
		$( "#context" ).removeClass('left');
		$( "#context" ).removeClass('right');
		$( "#context" ).removeClass('up');
	};


	$(".move-left").click(function(){
		localStorage.context = "backwards";
		// $( "#context" ).addClass('fade-out');
		console.log("localStorage.context", localStorage.context); 
	})

	$(".move-right").click(function(){
		localStorage.context = "forwards";
		
		// $( "#context" ).addClass('fade-out-right');

		console.log("localStorage.context", localStorage.context); 
	})

	$(".move-return").click(function(){
		localStorage.context = "upwards";
		// $( "#context" ).addClass('fade-out');
		console.log("localStorage.context", localStorage.context); 
	})

	$("a.plain").click(function(){
		localStorage.context = "normal";
		// $( "#context" ).addClass('fade-out');
		console.log("localStorage.context", localStorage.context); 
	})

	$("a.target").click(function(){
		localStorage.context = "normal";
		// $( "#context" ).addClass('fade-out');
		console.log("localStorage.context", localStorage.context); 
	})



});

