/* Arlene Smith
 Date: 02/06/2014
 Assignment: Goal1: Assignment: Duel 1
 */



(function(){

    console.log("FIGHT!");

    //players name

    var playerOneName = "Alien";
    var playerTwoName = "Mutant";

    //players damage

    var player1Damage = 15;
    var player2Damage = 15;

    // players health

    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round = 0;

    function fight(){



        alert(playerOneName +": " + playerOneHealth + " " + "START" + " " + playerTwoName + " :" + playerTwoHealth);


        for(var i= 0; i < 10; i++){
           // formula Math.floor(Math.random()*(max-min)+ min);

            var minDamage1 = player1Damage * .6;
            var minDamage2 = player2Damage * .6;
            var f1= Math.floor(Math.random()* (player1Damage - minDamage1)+ minDamage1);
            var f2= Math.floor(Math.random()* (player2Damage - minDamage2)+ minDamage2);


            //inflict damage
            playerOneHealth -=f1;
            playerTwoHealth -=f2;

            console.log(playerOneName +": " + playerOneHealth + " " + " : " + playerTwoName + ": " + playerTwoHealth);


            var results = winnerCheck()

            console.log(results);

            if(results === "no winner"){
                round++;
                alert(playerOneName + ": " + playerOneHealth + " " + "ROUND"+ " " + round + " "+ "OVER" + ": " + playerTwoName + ":" + playerTwoHealth);
            }else{
                alert(results);
                break;

            }

        };


    };


    function winnerCheck(){

        var result = "no winner";

        if(playerOneHealth<1&&playerTwoHealth<1){
            result = "You Both Die";

        }else if(playerOneHealth<1){
            result = playerTwoName + " "+ "WINS!"

        }else if(playerTwoHealth<1){
            result = playerOneName + " " +"WINS!"

      };
        return result;





    };




    console.log("program");


    fight();




})();

