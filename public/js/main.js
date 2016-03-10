


// TRIGGER SCROLL ACTIONS

$(window).scroll(function(){
    $(".benefits-container .title").animate({top:0},1000); //------BENEFIT TITLE FIT SCREEN
});




// BOTONS EFFECTS
$( ".btn_registrate" ).hover(
  function() {
    $( this ).addClass( "animated jello" );
  }, function() {
    $( this ).removeClass( "animated jello" );
  }
);