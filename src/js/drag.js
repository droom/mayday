$(document).ready(function() {

  $( "a.pan" ).click(function(e) {

    e.preventDefault();

    if ( $(this).hasClass('active') ){

    $(this).removeClass('active');
    $(this).css('outline', '2px solid blue');

    } else {

    $(this).addClass('active');
    $(this).css('outline', '2px solid red');

    }

  });

});