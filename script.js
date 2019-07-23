let randomNumber;
let wrongGuessCount;

function resetGame() {
    randomNumber = parseInt(Math.random() * 100);
    wrongGuessCount = 0;
}

resetGame();


function guessTheNumber() {
    let userInput = parseInt(document.querySelector("input").value);

    if (userInput < randomNumber) {
        alert("too small");
        wrongGuessCount++;
    } else if (userInput > randomNumber) {
        alert("too big");
        wrongGuessCount++;
    } else {
        alert("Congrats! wrong guesses " + wrongGuessCount);
        resetGame();
    }

}