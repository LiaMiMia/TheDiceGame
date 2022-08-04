/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import {
  renderer,
  scene,
  camera,
} from '../var/varThree.js';

function toRad(number) {
  return number * (Math.PI / 180);
}

function setRotation(xRot, yRot, zRot, dice) {
  dice.rotation.x = toRad(xRot);
  dice.rotation.y = toRad(yRot);
  dice.rotation.z = toRad(zRot);
}

function deFace() {
  return Math.floor(Math.random() * 6) + 1;
}

function formeInvisible(object) {
  if (object.visible === true) {
    object.visible = false;
    renderer.render(scene, camera);
    requestAnimationFrame(formeInvisible);
  }
}

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
