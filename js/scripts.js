$(document).ready(function(){
   $("#begin").click(function(){
    var nameOne = $("#btnplayer1").val();

    
    $("#player1h").html(  nameOne);
   });
});



/*

$(document).ready(function (){
   $("#player1-roll").click(function(){
      var random1 = Math.floor((Math.random()*6) + 1);
      var initial = 0;
      var player1 = initial + random1;
      $("#round-total-1").text("DICE ROLL:" + random1);
     $("#player1-hold").click(function() {
        var totalScore =player1;
        player1 = 0; 
      $("#total-score-1").text(totalScore)
     });
  });
});
*/