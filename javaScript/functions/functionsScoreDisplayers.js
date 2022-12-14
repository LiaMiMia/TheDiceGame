/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import { playersArray } from '../dé-3d.js';

let index = 0;

// fonction qui permet de changer la classe d'un block en fonction de l'index
function setElementClassName() {
  if (index === 0) {
    playerBlock0.className = 'underTheLight';
    playerBlock1.className = 'BackToShadow';
  } else {
    playerBlock1.className = 'underTheLight';
    playerBlock0.className = 'BackToShadow';
  }
}

// fonction qui va définir l'index du tableau player. va permettre le changement de tour
function setIndex() {
  if (index === 0) {
    index = 1;
  } else {
    index = 0;
  }
  setElementClassName();
}

// fonction qui gére l'affichage des messages
// et appelle les méthodes qui changent les scores du joueur en cours
function playScores(result) {
  if (result === 1 && playersArray[index].currentScore !== 0) {
    playersArray[index].resetCurrentScore();
    setIndex();
    message.innerHTML = `Pas de chance ! le dé est à 1 ! C'est au tour du joueur ${playersArray[index].name} de lancer les dés !`;
  } else if (result === 1 && playersArray[index].currentScore === 0) {
    setIndex();
    message.innerHTML = `Pas de chance ! le dé est à 1 ! C'est au tour du joueur ${playersArray[index].name} de lancer les dés !`;
  } else {
    playersArray[index].setCurrentScore(result);
  }
}

export {
  setIndex, playScores, index, setElementClassName,
};
