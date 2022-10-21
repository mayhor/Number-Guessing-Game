const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = require("prompt-sync")();

var maxNumber = 2;

function guessGame(maxNumber) {
  readline.question("Enter Your Player Name: ", (name) => {
    console.log(`Hello ${name}! \nWelcome to the Guessing game...\n`);
    console.log(
      "A random number is  currently being generated...\n\nYour job is to guess which number it is"
    );
    console.log("Game starts... in...");
    console.log("3...\n2...\n1...\nGo");
    var correctNumber = true;
    do {
      var num = Math.floor(Math.random() * maxNumber) + 1;
      const guessed = prompt(`Guess a number between 1 and ${maxNumber}: `);
      if (guessed == num) {
        console.log(
          `The random number is ${num}\nYou guessed ${guessed}\n\nWow That's correct!\n`
        );
        maxNumber++;
      } else {
        console.log(" Sorry That's Incorrect");
        console.log(`The random number is ${num}`);
        console.log("\nGame over...\n\nGame closing...\n");
        correctNumber = false;
      }
    } while (correctNumber);
    readline.close();
  });
}
guessGame(maxNumber);