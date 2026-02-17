let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

while (userGuess /= randomNumber) {
    let userGuess = Number(prompt("Guess a random number between 1 and 10! (type 999 to exit)"));
    if (userGuess === 999) {
        console.log("End")
    } else if (userGuess < 1 && userGuess > 10) {
        console.log("invalid input! Try again!");
    } else if (userGuess < randomNumber) {
        console.log("Too low!");
        attempts++;
    } else if (userGuess > randomNumber) {
        console.log("Too high!");
        attempts++;
    }
}
if (userGuess === randomNumber) {
    alert("You guessed right in %s attempts", attempts);
}