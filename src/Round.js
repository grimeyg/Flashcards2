var Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    let card = this.returnCurrentCard();
    let turn = new Turn(guess, card);
    let answer = turn.evaluateGuess();
    let feedback = turn.giveFeedback();

    this.turns ++;
    this.deck.shift();

    if (answer === false) {
      this.incorrectGuesses.push(card.id);
    }
    return feedback;
  }

  calculatePercentCorrect() {
    let percentIncorrect = (this.incorrectGuesses.length / this.turns) * 100;
    let percentCorrect = Math.floor(100 - percentIncorrect);
    return percentCorrect;
  }

  endRound() {
    let percentCorrect = this.calculatePercentCorrect();
    return console.log(`** Round over! ** You answered ${percentCorrect}% of the
    questions correctly!`);
  }
}

module.exports = Round;
