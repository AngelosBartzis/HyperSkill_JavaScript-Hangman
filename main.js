// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

/*Start of stage 3.

const wordsList = ['python', 'java', 'swift', 'javascript'];

let hangMan = function () {
const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
const quiz = input(`H A N G M A N
Guess the word: `);
  switch (randomWord) {
  case "python":
    console.log("You survived!");
    break;
  default:
    console.log("You lost!");
    break;
  }
}

hangMan();

End of stage 3.*/



/*Start of stage 4.

const wordsList = ['python', 'java', 'swift', 'javascript'];

let hangMan = function () {
  const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  const guessedWord = randomWord.slice(0, 3);
  let hyphen = "-";
  let hiddenLetters = hyphen.repeat(randomWord.length-3);
  const quiz = input(`H A N G M A N
  Guess the word ${guessedWord + hiddenLetters}:`);
  if (quiz === randomWord) {
    console.log("You survived!");
  } else {
    console.log("You lost!");
  }
}

hangMan();

End of stage 4.*/


/*Start of stage 5.

const wordsList = ['python', 'java', 'swift', 'javascript'];

let hangMan = function () {

  let randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  let hiddenWord = "-".repeat(randomWord.length);

console.log(`H A N G M A N
`);
  for (let attempt = 7; attempt >= 0; attempt--) {
  console.log(`${hiddenWord}`);
  let quiz = input(`Input a letter: `);
    if (randomWord.includes(quiz)) {
      let newHiddenWord = "";
      for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === quiz && hiddenWord[i] === "-") {
          newHiddenWord += quiz;
        } else {
          newHiddenWord += hiddenWord[i];
        }
      }
      hiddenWord = newHiddenWord;
    } else {
        console.log("That letter doesn't appear in the word.");
    }
  }
  console.log('\nThanks for playing!');
}

hangMan();

End of stage 5.*/


/*Start of stage 6.

const wordsList = ['python', 'java', 'swift', 'javascript'];

let hangMan = function () {

  let randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  let hiddenWord = "-".repeat(randomWord.length);
  let usedWrongLetters = [];
  let usedCorrectWords = [];

console.log(`H A N G M A N
`);

  while (usedWrongLetters.length < 8) {
  console.log(`${hiddenWord}`);
  let quiz = input(`Input a letter: `);
    console.log(``);
    if (usedCorrectWords.includes(quiz)) {
                  console.log("No improvements.");
                  usedWrongLetters.push(quiz);
                }
      if (randomWord.includes(quiz)) {
         usedCorrectWords.push(quiz);
        let newHiddenWord = "";
          for (let i = 0; i < randomWord.length; i++) {
              if (randomWord[i] === quiz && hiddenWord[i] === "-") {
                  newHiddenWord += quiz;
              } else {
                  newHiddenWord += hiddenWord[i];
        }
      }
      hiddenWord = newHiddenWord;
        if (newHiddenWord === randomWord) {
          console.log("You guessed the word!\nYou survived!");
          break;
        }
    } else {
    console.log("That letter doesn't appear in the word.");
    usedWrongLetters.push(quiz);
      }
  }
  if (hiddenWord !== randomWord) {
    console.log('You lost!');
  }
}

hangMan();

End of stage 6.*/



/*Start of stage 7.

const wordsList = ['python', 'java', 'swift', 'javascript'];

let hangMan = function () {

let randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
let hiddenWord = "-".repeat(randomWord.length);
let usedWrongLetters = [];
let usedCorrectWords = [];

console.log(`H A N G M A N
`);

while (usedWrongLetters.length < 8) {
    console.log(`${hiddenWord}`);
    let quiz = input("Input a letter: ");
    console.log(``);
    if (usedCorrectWords.includes(quiz)) {
        console.log("You've already guessed this letter.");
    }
    if (quiz.length === 1) {
        usedCorrectWords.push(quiz);
    }
    if (quiz.length !== 1) {
        console.log("Please, input a single letter.")
    }
    if (/[a-z]/.test(quiz) === false) {
        console.log("Please, enter a lowercase letter from the English alphabet.");
    }
    if (randomWord.includes(quiz)) {
        let newHiddenWord = "";
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === quiz && hiddenWord[i] === "-") {
                newHiddenWord += quiz;
            } else {
                newHiddenWord += hiddenWord[i];
            }
        }
        hiddenWord = newHiddenWord;
        if (newHiddenWord === randomWord) {
            console.log(`You guessed the word ${randomWord}!
You survived!`);
            break;
        }
    } else {
        if (quiz.length === 1 && /[a-z]/.test(quiz) === true) {
                console.log("That letter doesn't appear in the word.");
                usedWrongLetters.push(quiz);
        }
    }
}
if (hiddenWord !== randomWord) {
    console.log('You lost!');
    }
}

hangMan();

End of stage 7.*/



const wordsList = ['python', 'java', 'swift', 'javascript'];
let wins = [];
let loses = [];

let hangMan = function () {

    let randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    let hiddenWord = "-".repeat(randomWord.length);
    let usedWrongLetters = [];
    let usedCorrectWords = [];

    while (usedWrongLetters.length < 8) {
        console.log(`${hiddenWord}`);
        let quiz = input("Input a letter: ");
        console.log(``);
        if (usedCorrectWords.includes(quiz)) {
            console.log("You've already guessed this letter.");
        }
        if (quiz.length === 1) {
            usedCorrectWords.push(quiz);
        }
        if (quiz.length !== 1) {
            console.log("Please, input a single letter.")
        }
        if (/[a-z]/.test(quiz) === false) {
            console.log("Please, enter a lowercase letter from the English alphabet.");
        }
        if (randomWord.includes(quiz)) {
            let newHiddenWord = "";
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === quiz && hiddenWord[i] === "-") {
                    newHiddenWord += quiz;
                } else {
                    newHiddenWord += hiddenWord[i];
                }
            }
            hiddenWord = newHiddenWord;
            if (newHiddenWord === randomWord) {
                console.log(`You guessed the word ${randomWord}!
You survived!`);
              wins.push(1);
              gameMenu();
              break;
            }
        } else {
            if (quiz.length === 1 && /[a-z]/.test(quiz) === true) {
                console.log("That letter doesn't appear in the word.");
                usedWrongLetters.push(quiz);
            }
        }
    }
    if (hiddenWord !== randomWord) {
        console.log('You lost!');
        loses.push(1);
        gameMenu();
    }
}

let gameMenu = function () {

console.log(`H A N G M A N`);
  
let menuChoices =
  input("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit: ");
    switch(menuChoices) {
      case "play":
        hangMan();
        break;
      case "results":
        console.log(`You won: ${wins.length} times`);
        console.log(`You lost: ${loses.length} times`);
        gameMenu();
        break;
      case "exit":
        break;
      default:
        gameMenu();
  }
}

gameMenu();