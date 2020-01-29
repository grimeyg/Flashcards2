const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round')

describe('Round', function() {

  it('should start with a deck of cards', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal([card, card2, card3])
  })

  it('should start with 0 turns', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
  })

  it('should start with an empty array of incorrect guesses', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card]);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.deep.equal([]);
  })

  it('should return the current card', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card);
  })

  it('should allow a turn to be taken', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card, card2]);
    const round = new Round(deck);
    round.takeTurn('function');
    expect(round.turns).to.equal(1);
    expect(round.returnCurrentCard()).to.equal(card2);
  })

  it('should give feedback when a turn is taken', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card, card2]);
    const round = new Round(deck);
    expect(round.takeTurn('object')).to.equal('Correct!');
  })

  it('should calculate the percentage of correct answers', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card4 = new Card(4, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card, card2, card3, card4]);
    const round = new Round(deck);
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('object');
    round.takeTurn('function');
    expect(round.calculatePercentCorrect()).to.equal(50);
  })

  it('should end the round', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card4 = new Card(4, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card, card2, card3, card4]);
    const round = new Round(deck);
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('object');
    round.takeTurn('function');
    expect(round.endRound()).to.be.a('function');
  })
})
