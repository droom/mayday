$(document).ready(function() {


  // $(function() {
  //   $( "#draggable" ).draggable();
  //   axis: "x";
  //   revert: true;
  //   scrollSpeed: 100;
  // });


  // jQuery(function($){
  //   $("#viewport").draggable({containment: "#container", scroll: false});
  //   $("#viewport").on("drag", function(){
  //     $(this).css("background-position", "-" + $(this).position().left + "px -" + $(this).position().top + "px")
  //   });
  // });


  var togglePan = false



  $( "a.pan" ).click(function(e) {
    e.preventDefault();

    if (togglePan){

      togglePan = false;
      $(this).css('background', 'blue')
      $('.yope').removeClass('drag');

      return;

    } else {

      togglePan = true;
      $(this).css('background', 'red');
      $('.yope').addClass('drag');
      return;

    }

    console.log(togglePan);


  });



  var top = $(".drag").offset().top + $(".drag").height();
  var left = $(".drag").offset().left + $(".drag").width();
  var bottom = $(".drag").offset().top - $(".drag").height();


  $('.drag').draggable({axis: 'x', containment : [-700, top, left, bottom] });







});