
//Function picks a random number at the start of the game. The number should be between 19 and 120
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id to show on screen
    // The Random number has to be between 1 - 12
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var userTotal= 0;
    var wins= 0;
    var losses = 0;
   $('#numberWins').text(wins);
   $('#numberLosses').text(losses);
})
