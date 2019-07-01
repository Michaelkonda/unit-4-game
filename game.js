//Global Variables
//------------------------

//Crystal Variables
//Creating initial values for the crystals
var crystal = {
    blue:
    {
        name: "Blue",   
        value: 0

    },
    green:
    {
        name: "Green",   
        value: 0
    },
    red:
    {
        name: "Red",   
        value: 0
    },
    yellow:
    {
        name: "Yellow",   
        value: 0
    }

};

//Scores Current and Target.....
var currentScore = 0;
var targetScore = 0;

 //Wins and LOsses
 var winCount = 0;
 var lossCount = 0;
    
//Functions
//-----------------------
//create function for random number//
var getRandom  = function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Starts the game//
var startGame = function() {

    //Reset the current score
     currentScore = 0;

    //Set new Target score between (19 and 120)
     targetScore = getRandom(19,120);

    //Set different values for each crystals (between 1 and 12)//
    crystal.blue.value = getRandom(1,12);
    crystal.red.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);
    crystal.yellow.value = getRandom(1,12);

    //Jquery//
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore); 

    //Console testing//
    console.log("---------------------")
    console.log("Target Score: " + targetScore);
    console.log("Blue:" +crystal.blue.value +"| Green: "+ crystal.green.value +" | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
}

//Add response on clicks to crystals//
var addValues = function(crystal) {

    //Change current score//
    currentScore = currentScore + crystal.value;

    //Change html to reflect changes in currentScore//
    $("#yourScore").html(currentScore);

    //Call the checkWin function//
    checkWin();
    //console testing
    console.log("Your Score" + currentScore);
}

// Check if use won or lost and reset the game//
var checkWin = function() {

    //Check if current score is larger than the taretScore//
    if(currentScore > targetScore){
        alert("You Lost!");
        console.log("You Lost");

        //Add to loss counter//
        lossCount++;

        //Change lossCount html//
        $("#lossCount").html(lossCount);

        //restart the game//
        startGame();

    }
    else if(currentScore == targetScore) {
        alert("You Won!");
        console.log("You Won!");

        //Add to win counter//
        winCount++;

        //Change winCount html//
        $("#winCount").html(winCount);

        //restart the game//
        startGame();
    }

}



//Main Process
//-----------------------
// starts the game for the first time//
startGame();

//onclick function to test the crystal value//

$("#blue").click(function(){
   addValues(crystal.blue);
});
$("#green").click(function(){
    addValues(crystal.green);
 });
 $("#red").click(function(){
    addValues(crystal.red);
 });
 $("#yellow").click(function(){
    addValues(crystal.yellow);
 });