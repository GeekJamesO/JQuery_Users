$(document).ready(function(){
  $("form").submit( function() {
    var outputstring = $(form).serialize();
    console.log("James 123");

    return false;
  });
  // $("button").click(function(){
  //   $("p").slideToggle();
  // });
});
