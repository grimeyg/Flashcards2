const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', function() {
  it('should be a function and instance of Game', function(){
    const game = new Game();
    expect(Game).to.be.a('function');
    expect(game).to.be.an.instanceof(Game);
  })
  it('should start on round 1', function (){
    const game = new Game();
    expect(game.currentRound).to.equal(1);
  })
})
