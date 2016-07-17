var keypress = require('keypress');
 
console.log('Hello this is my Node Hangman Game. Start the game by guessing a letter at any time. The topic is movie/book title');
var question = '_ _ _   _ _ _ _ _   _ _   _ _ _ _ _   _ _ _ _ _ _';
console.log(question);
var questionArray = question.split('');
//console.log(questionArray);
var correctGuess;
var guesses = 10;

// make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);

function LetterChecker(options){
	correctGuess = 0;
	this.correctWord = options.correctWord;
	this.letterGuessed = options.letterGuessed;
	//var split = (this.correctWord).split("");
	this.result = function(){
		
		console.log('Letter guessed: ' + this.letterGuessed.name);
		
		for(i=0; i<(this.correctWord).length; i++){
			if(this.letterGuessed.name == (this.correctWord).charAt(i)){
				correctGuess++;
				(question.charAt(i)) = this.letterGuessed.name;
				//console.log(question.charAt(i));
				console.log(question);
			}
		}
		if(correctGuess == 0){
			guesses--;
			console.log('Remaining guesses: ' + guesses);
		}
	}
}

// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
  //console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }

var randomGuess = new LetterChecker({correctWord: 't h e   c o u n t   o f   m o n t e   c r i s t o', letterGuessed: key});

randomGuess.result();

});
 
process.stdin.setRawMode(true);
process.stdin.resume();