const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function and an instance of a deck', function(){
    const deck = new Deck([null]);
    expect(Deck).to.be.a('function');
    expect(deck).to.be.an.instanceof(Deck);
  })

  it('should have an array of cards', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card]);
    expect(deck.cards).to.be.an('array');
  })

  it('should know how many cards are in the deck', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const deck = new Deck([card, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  })
})
