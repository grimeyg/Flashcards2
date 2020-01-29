const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function and an instance of Turn', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should take a string as the first argument', function() {
    const turn = new Turn('function', null);
    expect(turn.guess).to.be.a('string');
  })

  it('should take an object as the second argument', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.currentCard).to.be.an('object');
  })

  it('should return a Player\'s guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.returnGuess()).to.equal('function');
  })

  it('should return the card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.returnCard()).to.equal(card);
  })

  it('should evaluate the Player\'s guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    //2 turns, 1st turn incorrect, 2nd turn correct
    const turn = new Turn('function', card);
    const turn2 = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  })

  it('should give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('function', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  })
})
