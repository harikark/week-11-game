var Word = require('word.js');
var prompt = require('prompt');


game = {
 	wordBank: ["Lebron", "Jordan", "Forward", "Jersey", "Knicks", "Warriors", "Mavericks", "Nets"],
 	wordsWon: 0,
 	guessesLeft: 10,
 	currentWrd: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);//takes random word from bank
 		this.currentWrd.getLet();
 		this.promptUser();
 		console.log("Welcome to NBA Hangman!");
		console.log("Guess a letter of the name of an NBA team, player, or term");
		console.log("Goodluck!");
prompt.start();
 	},

 	resetGuesses: function(){
 		this.guessesLeft= 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWrd.findWord()){
 						console.log("You won!");
 						return;
 					}
 			}

 			console.log("Guesses left: " + self.guessesRemaining);
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();