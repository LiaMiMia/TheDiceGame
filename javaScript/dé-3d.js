/* eslint-disable import/no-cycle */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
//  Import de la class playe

import Player from './class/Player.js';

// import des fonctions
// import de la fonction create dice
import createDice from './functions/functionCreateDice.js';
// import des fonctions qui gèrent le dé
import {
  setRotation,
  deFace,
  formeInvisible,
  formeVisible,
} from './functions/functionsDice.js';
// import des fonctions qui gèrent les scores.
import {
  setIndex,
  playScores,
  index,
  setElementClassName,
} from './functions/functionsScoreDisplayers.js';

// import des variables
import {
  camera,
  scene,
  renderer,
  light,
} from './var/varThree.js';

import {
  deEvent,
  message,
  hold,
  menuBtn,
  Form,
  commencer,
  body,
  affichagesDy,
} from './var/varDomEl.js';

import {
  initRotx,
  initRoty,
  initRotz,
  dicePossibilities,
  xRotation,
  yRotation,
  zRotation,
} from './var/varDice.js';

import {
  musicAnim,
  cameraZPosition,
  animationDuration,
  DeTarget,
  musicChing,
  musicWin,
} from './var/varOthers.js';

// gestion de la camera
camera.position.z = cameraZPosition;
camera.position.y = 4;
scene.rotateX(-90 * (Math.PI / 380));

// gestion du renderer
// va donner une taille au canvas (largeur, hauteur)
renderer.setSize(deEvent.clientWidth, deEvent.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// insèrre la scene et la camera dans le render
renderer.render(scene, camera);

window.addEventListener('resize', () => {
  const deWidth = deEvent.clientWidth;
  const deHeight = deEvent.clientHeight;

  camera.aspect = deWidth / deHeight;
  camera.updateProjectionMatrix();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(deWidth, deHeight);

  renderer.render(scene, camera);
});

// inserre l'animation dans la div
deEvent.appendChild(renderer.domElement);

// création de deux dés
for (let i = 0; i <= 1; i += 1) {
  const dice = createDice();
  dice.name = i;
  dice.scale.set(2, 2, 2);
  dice.rotation.x = initRotx;
  dice.rotation.y = initRoty;
  dice.rotation.z = initRotz;
  scene.add(dice);
}

// "nomination des deux dés"
const forme = scene.children[0];
const dice = scene.children[1];

// que la lumière soit
// on ajoute de la lumière à la scène pour voir les dés
light.position.set(0, 0, 10);

// lumière dans la scene
scene.add(light);
renderer.render(scene, camera);

// les joueurs
// création des joueurs
let player1;
let player2;
// eslint-disable-next-line import/no-mutable-exports
let playersArray;
// eslint-disable-next-line import/prefer-default-export
export { playersArray };
commencer.addEventListener('click', () => {
  const nameP1 = document.getElementById('NomP1').value;
  const nameP2 = document.getElementById('NomP2').value;

  player1 = new Player(0, nameP1);
  player2 = new Player(1, nameP2);
  playersArray = [player1, player2];

  // affichage des deux joueurs
  playersArray.forEach((gamer) => {
    gamer.createPlayerBlock();
    // export {playersArray};
  });

  // le message par default
  message.innerHTML = `Bienvenue au jeu de dé ! <br> C'est à ${playersArray[index].name} de commencer !`;
  setElementClassName();
  formeInvisible(forme);
  affichagesDy.style.display = 'flex';
  Form.style.display = 'none';
  menuBtn.style.display = 'inline-block';

//   export {playersArray}
});

function winner(id) {
  if (Number(playersArray[id].globalScore) >= 100) {
    const GlobalScoreHtml = document.getElementById(`scoreGlobal${id}`);
    GlobalScoreHtml.className = 'endAnimation';
    musicWin.play();
    musicWin.loop = false;
    setTimeout(() => {
      body.innerHTML = `<div class="div-winner"><div class="div-winner-text">Le joueur ${playersArray[id].name} a gagné !</div> <button id="rejouer" onClick="window.location.href=window.location.href" class="start-btn">Rejouer</button></div>`;
    }, 3000);
    return true;
  }
  return false;
}

// function holdDisabled(id, finalResult) {
//   const round = document.getElementById(`ScoreTour${id}`);
//   if (Number(round) !== finalResult || Number(round) !== 0) {
//     hold.disabled = true;
//     return true;
//   }
//   hold.disabled = false;
//   return false;
// }

// gestion de l'animation du(des) dé(s) ;)

deEvent.addEventListener('click', () => {
  const timeToStart = Date.now();
  const newSort = deFace();
  const timeToFinish = timeToStart + animationDuration;
  hold.disabled = true;
  formeVisible(forme);
  formeInvisible(dice);
  setRotation(
    dicePossibilities[newSort][0],
    dicePossibilities[newSort][1],
    dicePossibilities[newSort][2],
    dice,
  );

  function startAnimation() { // ne pas déplacer car dépend de timeToFinish et timeToStart
    const now = Date.now();
    const timeFromZero = now - timeToStart;
    const t = (timeFromZero % animationDuration) / animationDuration;

    forme.position.y = Math.abs(Math.sin(2 * Math.PI * t)) * DeTarget;
    forme.rotation.x += xRotation;
    forme.rotation.y += yRotation;
    forme.rotation.z += zRotation;
    renderer.render(scene, camera);

    if (now <= timeToFinish) {
      requestAnimationFrame(startAnimation);
    } else {
      // sinon ça ne fonctionne plus correctement !
      // eslint-disable-next-line no-lonely-if
      if (Math.floor(forme.position.y * 10) / 10 === 0) {
        formeInvisible(forme);
        formeVisible(dice);
      } else {
        requestAnimationFrame(startAnimation);
      }
    }
  }
  startAnimation();
  setTimeout(() => { playScores(newSort); }, animationDuration);
  musicAnim.play();
  forme.position.y = 0;
});

// gestion du bouton hold
hold.addEventListener('click', () => {
  if (Number(playersArray[index].currentScore) !== 0) {
    playersArray[index].setGlobalScore();
    playersArray[index].resetCurrentScore();
    musicChing.play();
    // music.loop =false;
    winner(index);
    if (winner(index) === false) {
      setIndex();
      // setElementId();
      message.innerHTML = `C'est au tour du joueur ${playersArray[index].name} de lancer le dé !`;
    }
  } else {
    message.innerHTML = `${playersArray[index].name} Vous devez jouer au moins une fois le dé. C'est à votre tour !`;
  }
});
