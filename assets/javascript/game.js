$( document ).ready(function(){

    var Random=Math.floor(Math.random()*101+19)
    $('#randomNumber').text(Random);
   
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var userTotal = 0;
    var Survival = 0;
    var Doomed = 0;
   $('#numberSurvived').text(Survival);
   $('#numberDoomed').text(Doomed);



//resets the game
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#finalScore').text(userTotal);
    } 



function winner() {
alert("Humanity Won!");
  Survival++; 
  $('#numberSurvived').text(Survival);
  reset();
}

function loser(){
alert ("We Are Doomed!");
  Doomed++;
  $('#numberDoomed').text(Doomed);
  reset()
}

  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalScore').text(userTotal); 
          
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalScore').text(userTotal); 
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalScore').text(userTotal);

          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalScore').text(userTotal); 
      
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 