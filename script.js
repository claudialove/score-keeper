
/////////////APP PREP///////////////////////////////////////////////////////////
//variables to set winning value 
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span")

//function to allow input number to display as "Playing to:"
numInput.addEventListener( "change", function (){
    winningScoreDisplay.textContent = numInput.value
    winningScore = numInput.value;
    });
//////////////////////////////////////////////////////////////////////////////////


////////////////////APP IN ACTION/////////////////////////////////////////////////////
//SELECTOR VARIABLES P1 + P2
var buttonP1 = document.querySelector(".p1");
var buttonP2 = document.querySelector(".p2");
var p1Display = document.querySelector(".p1Display");
var p2Display = document.querySelector(".p2Display");
var p1Score = 0;
var p2Score = 0;

//SELECTOR VARIABLE GAME OVER
var gameOver = false;
var winningScore = numInput.value;

//FUNCTION MANIPULATE P1
buttonP1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score == winningScore) {
            gameOver = true;
        } 
            p1Display.textContent = p1Score;
    }
});
//FUNCTION MANIPULATE P2
buttonP2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score == winningScore) {
            gameOver = true;
        } 
            p2Display.textContent = p2Score;
    }
});
//////////////////////////////////////////////////////////////////////////////////////


///////////////////APP RESET///////////////////////////////////////////////////////
//SELECTOR VARIABLES RESET
var buttonReset = document.querySelector(".reset");

// FUNCTION TO MANIPULATE RESET
buttonReset.addEventListener("click", function () {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
    });
 
/////////////////////////////////////////////////////////////////////////////////////////





