$(document).ready(function (){
   $("#player1-roll").click => {
      var random1 = Math.floor((Math.random()*6) + 1);
      $("#die-roll-1").text("DICE ROLL:" + random1);  
   });
});
