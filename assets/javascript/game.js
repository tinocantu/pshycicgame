var computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g,', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;

var computerGuess = computerOptions[Math.floor(Math.random()* computerOptions.length)];
var newGuessesLeft = function () {
    document.querySelector('#guessLeft').innerHTML = "Guesses Left " + guessesLeft;
};
var newLetterToGuess = function () {
    this.letterToGuess = this.computerOptions[Math.floor(Math.random() * this.computerOptions.length)];

};

var newGuesses = function () {
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');

};

var reset = function () {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLetters = [];

    newLetterToGuess();
    newGuessesLeft();
    newGuesses();
}

newLetterToGuess();
newGuessesLeft();

document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuesses();

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            reset();
        }
    }else if(guessesLeft == 0){
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        reset();
    }
};