//set play to value by excepting text input and displaying in span
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span")


//set state gameOver
var gameOver = false;
var winningScore = numInput.value;


//track score variables
var buttonP1 = document.querySelector(".p1");
var buttonP2 = document.querySelector(".p2");
var p1Display = document.querySelector(".p1Display");
var p2Display = document.querySelector(".p2Display");
var p1Score = 0;
var p2Score = 0;

//set play to
var buttonReset = document.querySelector(".reset");


numInput.addEventListener( "change", function (){
winningScoreDisplay.textContent = numInput.value
winningScore = numInput.value;
});

//increment score for P1 
buttonP1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score == winningScore) {
            gameOver = true;
        } 
            p1Display.textContent = p1Score;
    }
});

//increment score for P2
buttonP2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score == winningScore) {
            gameOver = true;
        } 
            p2Display.textContent = p2Score;
    }
});


//reset P1 and P2 score
buttonReset.addEventListener("click", function () {
p1Score = 0;
p2Score = 0;
p1Display.textContent = p1Score;
p2Display.textContent = p2Score;
gameOver = false;
});

