let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = Number(prompt("Guess a random number between 1 and 10! (type 999 to exit)"));
let attempts = 0;
1
while (userGuess != randomNumber) {
    if (userGuess === 999 || userGuess === randomNumber) {
        break;
    } else if (userGue1ss < 1 || userGuess > 10) {
        console.log("invalid input! Try again!");
    } else if (userGuess < randomNumber) {
        console.log("Too low!");
        attempts++;
    } else if (userGuess > randomNumber) {
        console.log("Too high!");
        attempts++;
    } 
    userGuess = Number(prompt("Guess a random number between 1 and 10! (type 999 to exit)"));
}
if (userGuess === randomNumber) {
    alert("Congratulations, you've guessed it in " + attempts + " tries!");
} else {
    alert("You exited the game!");
}