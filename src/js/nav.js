$( document ).ready(function() {





  $(".animsition").animsition({
    // inClass: 'fade-in-sm',
    // outClass: 'fade-in-sm',
    inDuration: 300,
    outDuration: 100,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });




  if (localStorage.context === "backwards"){
    console.log("hello");
    $('body.work.iso').data( 'animsition-in-class', 'fade-in-left-sm' );
  };


  $(".move-left").click(function(){
    localStorage.context = "backwards";
  })

  $(".move-right").click(function(){
    localStorage.context = "forwards"
  })

  $("ul.work-list a.plain").click(function(){
    localStorage.context = "normal"
  })




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




