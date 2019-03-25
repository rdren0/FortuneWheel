import Wheel from "./Wheel.js"
import Puzzle from "./Puzzle.js";
import Round from "./Round.js";

import $ from 'jquery';

export default {

  hiddenBoard(playersArr) {
    $('.game-area').removeClass("hidden");
    $('.name-entry').addClass("hidden");
    playersArr.forEach((player, ind) => {
      $('#player' + ([ind + 1])).text(player.name);
    })

  },

  playerNames () {
    let players = ([$('#player1-input').val(), $('#player2-input').val(), $('#player3-input').val()]);
    return players;
  },

  resetGame () {
    location.reload();
  },

  fillSpace(puzzleLength, end) {
    const extraSpace = 14 - puzzleLength;
    const fill = extraSpace / 2;
    // debugger
    if (extraSpace % 2 === 0) {
      this.appendFill(fill + 1);
    } else {
      return end ? this.appendFill(fill + 1.5) : this.appendFill(fill + .5);
    }
  },

  appendFill (spaces) {
    let emptyTile = `<div class="puz-grid end"></div>`;
    for (let i = 0; i < spaces; i++) {
      $(`.puzzle`).append(emptyTile);
    }
  },

  appendWords (puzzleLine) {
    let tileClass;
    puzzleLine.forEach(index => {
      if (index === ' ' || index === '-' || index === '&' ) {
        tileClass = 'space';
      } else {
        tileClass = index;
      }
      $(`.puzzle`).append(`<div class="puz-grid secret ${tileClass}">${index} </div>`);
    });
  },

  appendPuzzle (line1, line2) {
    console.log(line1, line2)
    this.fillSpace(line1.length, false);
    this.appendWords(line1);
    this.fillSpace(line1.length, true);
    if (line2 !== null) {
      $(`.puzzle`).addClass('two-line');
      this.fillSpace(line2.length, false);
      this.appendWords(line2);
      this.fillSpace(line2.length, true);
    }
  },


  setCategoryText(category) {
    $('.clue-container').text(category)
  },

  spinWheel() {
    let clicks = 1;
    let wheel = new Wheel();
    const winner = Math.round(Math.random() * 21);
    /*multiply the degree by number of clicks
    generate random number between 1 - 360, 
    then add to the new degree*/
    const extraDegree = 0//(21 - winner) * 36;
    const spinAgain = (1800 * clicks) + extraDegree;
    const totalDegree = Math.round(spinAgain / 36) * 100;
    wheel.spinWinner(winner);
    clicks++;
    $('#inner').css({
      'transform': 'rotate(' + totalDegree + 'deg)'
    });
    $('.spin-winner').html(`${wheel.currentSpin}`);
  },

  turnOrder(oldPlayer, newPlayer) {
    $(`#player${oldPlayer}-area`).removeClass('active');
    $(`#player${newPlayer}-area`).addClass('active'); 
  },

   displayCorrectLetter(puzzle, guess) {
    // we dont currently have the index added to each box when they append for this to work
    // puzzle.forEach((letter, index) => {
    //   if (letter === guess) {
    //     $(`puz-grid secret ${index}`).removeClass('secret')
    //   } 
    // })
  },

  buyAVowel(){

  },
  displayScore(player,value){

  }
  
  

}