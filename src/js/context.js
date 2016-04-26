$(document).ready(function() {

  console.log('localStorage.context', localStorage.context);

  if (localStorage.context === "backwards"){
    $( "#context" ).attr('data-animsition-in-class','fade-in-left-sm');
  };

  if (localStorage.context === "forwards"){
    $( "#context" ).attr('data-animsition-in-class','fade-in-right-sm');
  };

  if (localStorage.context === "upwards"){
    $( "#context" ).attr('data-animsition-in-class','fade-in-up-sm');
  };

  if (localStorage.context === "normal"){
    $( "#context" ).attr('data-animsition-in-class','fade-in');
  };


  $(".move-left").click(function(){
    localStorage.context = "backwards";
    console.log(".move-left");
  })

  $(".move-right").click(function(){
    localStorage.context = "forwards";
    console.log(".move-right");
  })

  $(".move-up").click(function(){
    localStorage.context = "upwards";
    console.log(".move-up");
  })

  

  $("a.plain").click(function(){
    localStorage.context = "normal";
    console.log(".ul.work-list a.plain");
  })

  $("a.target").click(function(){
    localStorage.context = "normal";
    console.log(".ul.work-list a.plain");
  })



});

