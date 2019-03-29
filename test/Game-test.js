import Game from "../src/Game.js";
import Round from "../src/Round.js"
import domUpdates from "../src/domUpdates.js"
import data from '../src/data.js'
import chai from 'chai'
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

// chai.spy.on(domUpdates, '',  () => [{},{},{}]);
chai.spy.on(domUpdates, ['appendPuzzle', 'setCategoryText', 'hiddenBoard'], () => true);


describe('Game', () => {
  let game;
  let round;
  let Data = data.puzzles.one_word_answers

  beforeEach(() => {
    game = new Game();
    round = new Round()
  });
  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have default properties', () => {
    expect(game.players).to.deep.equal([]);
    expect(game.allData).to.deep.equal([]);
    expect(game.round).to.equal(null);
    expect(game.roundCount).to.equal(0);
  });

  it('should be able to get a random puzzle', ()=> {
    expect(game.startGame).to.be.a('function');
    expect(game.getRandomData).to.be.a('function');
  });

  it('should be able to start a new round', () => {
    expect(game.createRound).to.be.a('function');
    expect(game.createPlayers).to.be.a('function');
  })

  it.skip('should increase rounds by one', () =>{
    expect(game.roundCount).to.equal(0);
    round.getPuzzle(game)
    expect(game.roundCount).to.equal(1);

  })

});

