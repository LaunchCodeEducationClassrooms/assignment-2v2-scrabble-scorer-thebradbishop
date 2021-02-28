// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += Number(pointValue)
		 }
 
	  }
	}
  console.log(`Score for '${word.toLowerCase()}': ${String(letterPoints)}`);
  return String(letterPoints);
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let wordEntered = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
  return wordEntered;
};

let simpleScore = function (word){
  word = word.toUpperCase();
  let letterPoints = 0;
  for (i = 0; i < word.length; i++){
    letterPoints += 1;
  }
  console.log(`Score for '${word.toLowerCase()}': ${String(letterPoints)}`);
  return String(letterPoints);
};

let vowelBonusScore = function(word){
  let isVowel = ['A', 'E', 'I', 'O', 'U', 'Y'];
  word = word.toUpperCase();
  let letterPoints = 0;
  for (i = 0; i < word.length; i++){
    if (isVowel.includes(word[i])){
      letterPoints += 3;
    } else {
    letterPoints += 1;
    }
  }
  console.log(`Score for '${word.toLowerCase()}': ${String(letterPoints)}`);
  return String(letterPoints);
};

let scrabbleScore;

const scoringAlgorithms =[ 
  {name:'Simple Score', description:'Each letter is worth 1 point.', scorerFunction:simpleScore},
  {name:'Bonus Vowels', description:'Vowels are 3 pts, consonants are 1 pt.', scorerFunction:vowelBonusScore},
  {name:'Scrabble',	description:'The traditional scoring algorithm.',	scorerFunction:oldScrabbleScorer}
];

function scorerPrompt(word) {
  let scoreMethod = input.question('Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ');
  
  scoringAlgorithms[scoreMethod].scorerFunction(word);
  }

function transform() {};

let newPointStructure;

function runProgram() {
   //initialPrompt();
   scorerPrompt(initialPrompt());   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

