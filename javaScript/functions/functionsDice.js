/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import {
  renderer,
  scene,
  camera,
} from '../var/varThree.js';

// fonction qui change les degrès en radians
function toRad(number) {
  return number * (Math.PI / 180);
}

// fonction qui applique une rotation sur trois dimensions à un objet three.js
function setRotation(xRot, yRot, zRot, dice) {
  dice.rotation.x = toRad(xRot);
  dice.rotation.y = toRad(yRot);
  dice.rotation.z = toRad(zRot);
}

// fonction qui génère un nombre aléatire entre 1 et 6.
function deFace() {
  return Math.floor(Math.random() * 6) + 1;
}

// fonction qui rend un objet three.js invisible
function formeInvisible(object) {
  if (object.visible === true) {
    object.visible = false;
    renderer.render(scene, camera);
    requestAnimationFrame(formeInvisible);
  }
}

// fonction qui rend un objet Three.js visible
function formeVisible(object) {
  if (object.visible === false) {
    object.visible = true;
    renderer.render(scene, camera);
    requestAnimationFrame(formeVisible);
  }
}

export {
  setRotation, deFace, formeInvisible, formeVisible, toRad,
};
