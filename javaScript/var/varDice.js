/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { toRad } from '../functions/functionsDice.js';

// quelques variables
const dicePossibilities = {
  1: [60, 45, 0],
  2: [60, 45, 270],
  3: [330, 0, 45],
  4: [150, 0, 45],
  5: [60, 45, 90],
  6: [240, 45, 0],
};

// constantes de rotation du cube avant chaque rafraichissement de l'animation
const xRotation = 0.03;
const yRotation = 0.05;
const zRotation = 0.02;

// rot initiale des dés
const initRotx = toRad(60);
const initRoty = toRad(45 + 90 + 90);
const initRotz = 0;

export {
  initRotx, initRoty, initRotz, dicePossibilities, xRotation, yRotation, zRotation,
};
