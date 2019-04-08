$(document).ready(function(){
   $("#begin").click(function(){
    var nameOne = $("#btnplayer1").val();


    $("#playeryou").html(  nameOne);
   });
});
$(document).ready(function(){
   $("#start").click(function(){
    var nameTWo = $("#btnplayer2").val();


    $("#playerthem").html(  nameTWo);
$("#Game").click(function(){
   $("#player-roll2").hide();
   $("#player-hold2").hide();
     });
   });
});




$(document).ready(function (){
   var initial1 = 0;
   var totalScore =0;
   $("#player-roll1").click(function(){
      var random1 = Math.floor((Math.random()*6) + 1);

      initial1= initial1 + random1;

      $("#round-total-1").text(random1);
     $("#player-hold1").click(function() {
        totalScore=totalScore + initial1 ;
      $("#total-score-1").text(totalScore)
      initial1 = 0;
      $("#player-roll1").hide();
      $("#player-hold1").hide();
      $("#player-roll2").show();
      $("#player-hold2").show();
      
      
     });
  });
});

$(document).ready(function (){
   var initial2 = 0;
   var totalScore =0;
   $("#player-roll2").click(function(){
      var random2 = Math.floor((Math.random()*6) + 1);

      initial2= initial2 + random2;

      $("#round-total-2").text(random2);
     $("#player-hold2").click(function() {
        totalScore=totalScore + initial2 ;
      $("#total-score-2").text(totalScore)
      initial2 = 0;
      $("#player-roll2").hide();
      $("#player-hold2").hide();
      $("#player-roll1").show();
      $("#player-hold1").show();
     });
  });
});

/*reatart game*/
function reset(){
   location.reload();
 }
