$(document).on('ready', function() {
	

	$("#ih-product").slick({
		dots: false,
		infinite: true,
		centerMode: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '#ih-words',
		responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 3
			},
		},


		]
	});




	$('#ih-words').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '#ih-product'
	});


	// $("#ih-product").slick({
	// 	dots: false,
	// 	infinite: true,
	// 	centerMode: true,
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1
	// });

	// $("#ih-product").slick({
	// 	dots: false,
	// 	infinite: true,
	// 	centerMode: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1
	// });

	// $("#ih-chrome").slick({
	// 	dots: false,
	// 	infinite: false,
	// 	centerMode: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1
	// });



});


