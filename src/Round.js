var Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Round {
  constructor(deck) {
    // console.log(deck);
    this.deck = deck;
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
    // if(percentCorrect < 90) {
    //   console.log(`** Not Good Enough. ** You answered ${percentCorrect}% of the
    //   questions correctly. Time for review!`)
    //   this.reviewRound()
    // }
    console.log(`** Round over! ** You answered ${percentCorrect}% of the
    questions correctly!`)
    return `** Round over! ** You answered ${percentCorrect}% of the
    questions correctly!`;
  }

  // reviewRound() {
  //   this.deck = this.incorrectGuesses.map(id => {
  //     prototypeQuestions.filter(card => card.id = id)
  //   })
  //   main.round();
  // }
}

module.exports = Round;
