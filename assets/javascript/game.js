
//Function picks a random number at the start of the game. The number should be between 19 and 120
    $('#randomNumber').text(Random);
    var Random=Math.floor(Math.random()*101+19)
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id to show on screen
    // The Random number has to be between 1 - 12
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var userTotal= 0;
    var Survival= 0;
    var Doomed= 0;
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


//Player/User clicking on Gemstones

$("#one").on ("click", function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#finalScore").text(userTotal);
          //sets win/lose conditions
        if (userTotal == Random){
          Survival();
        }
        else if ( userTotal > Random){
        Doomed();
        }  
  }) 
  $("#two").on ("click", function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#finalScore").text(userTotal);
        if (userTotal == Random){
         Survival();
        }
        else if ( userTotal > Random){
          Doomed();
        }
  }) 
  
  $("#three").on ("click", function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#finalScore").text(userTotal);
    if (userTotal == Random){
        Survival();
       }
       else if ( userTotal > Random){
         Doomed();
       }
 }) 



    $("#four").on ("click", function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $("#finalScore").text(userTotal);
         
              if (userTotal == Random){
              Survival();
            }
            else if ( userTotal > Random){
             Doomed();
            }
       })
