const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound = 1;
  }

  start() {
    let deck = new Deck(prototypeQuestions.map(card => new Card(card)));
    let d = deck.cards.map(card => card.id);
    let round = new Round(d);
    this.printMessage(deck);
    this.printQuestion(round);
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
