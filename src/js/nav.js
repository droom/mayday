$( document ).ready(function() {

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({

            scrollTop: target.offset().top
          }, 300, 'easeOutExpo');

          $("#return").css("top", "-70px");
          
          return false;
        }
      }
    });
  });


  var scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  console.warn(scrollbarWidth); 
  document.body.removeChild(scrollDiv);
  if ($(document).height() > $(window).height()) {
    console.log("scrollbar present");
    $('body.work.iso .band.head.hr.relative a.move.move-right').css('margin-right', scrollbarWidth);
  }


});




