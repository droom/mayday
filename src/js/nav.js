$( document ).ready(function() {
  // console.log(window.location.pathname);
  // console.log($(location).attr('href'));
  // $( "a.back" ).click(function( event ) {
  //   event.preventDefault();
  //   history.go(-1);
  // });
// localStorage.company = $('#company').val();
// localStorage.currency = $('#currency').val();
// localStorage.salutation = $('#salutation').val();

var project = [

["ATOP Watches", "Ideahouse", "DROOM+TZY"],
["mary", 42, "female"],
["jason", 21, "male"],
]


var project = [];
var link = [];
var client = [];
var studio = [];

$( "ul.work-list li dd.project" ).each(function( index ) {
  project.push( $(this).html() );
});
$( "ul.work-list li dd.client'" ).each(function( index ) {
  client.push( $(this).html() );
});
$( "ul.work-list li dd.studio'" ).each(function( index ) {
  studio.push( $(this).html() );
});
$( "ul.work-list li a.plain" ).each(function( index ) {
  link.push( $(this).attr('href') );
});

console.log(project);
console.log(link);
console.log(client);
console.log(studio);

});
