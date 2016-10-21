$(document).ready(function() {

  Modernizr.addTest('pointerevents',function(){
    return 'pointerEvents' in document.documentElement.style;
  })

});