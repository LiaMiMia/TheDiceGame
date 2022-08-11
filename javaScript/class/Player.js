/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { animateValueIncre, animateValueDecre } from '../functions/functionsCounteur.js';
import { playersBlock } from '../var/varDomEl.js';

// start : la classe player
export default class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.currentScore = 0;
    this.globalScore = 0;
  }

  getName() {
    return this.name;
  }

  createPlayerBlock() {
    playersBlock.innerHTML += `<div class="playerBlock${this.id}" id="playerBlock${this.id}" class="score"><h2 id="playerName">${this.name}</h2><h3>Global</h3><p id="scoreGlobal${this.id}" class="score">0</p><div class="scoreTourDiv"><h3>Round</h3><p id="ScoreTour${this.id}" class="score">0</p></div>`;
  }

  setCurrentScore(diceResult) {
    const htmlCurrentScore = document.getElementById(`ScoreTour${this.id}`);
    const finalScore = this.currentScore + diceResult;
    animateValueIncre(htmlCurrentScore, this.currentScore, finalScore, 2000);
    this.currentScore += diceResult;
    return this;
  }

  // setter permettant de modifier le currentScore ok
  resetCurrentScore() {
    const htmlCurrentScore = document.getElementById(`ScoreTour${this.id}`);
    animateValueDecre(htmlCurrentScore, this.currentScore, 0, 2000);
    this.currentScore = 0;
    return this;
  }

  // setter permettant de modifier le globalScore ok
  setGlobalScore() {
    const htmlGlobalScore = document.getElementById(`scoreGlobal${this.id}`);
    const finalScore = this.globalScore + this.currentScore;
    animateValueIncre(htmlGlobalScore, this.globalScore, finalScore, 2000);
    this.globalScore += this.currentScore;
    // htmlGlobalScore.innerHTML=this.globalScore;
    return this;
  }
}
// end : la classe player
