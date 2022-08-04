/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import {
  menuBtn,
  hideMenuBtn,
  xtraBox,
  affichagesDy,
  deEvent,
  hold,
} from '../var/varDomEl.js';

menuBtn.addEventListener('click', () => {
  menuBtn.style.display = 'none';
  hideMenuBtn.style.display = 'block';
  xtraBox.style.display = 'flex';
  affichagesDy.style.display = 'none';
  deEvent.style.display = 'none';
  hold.style.display = 'none';
});

hideMenuBtn.addEventListener('click', () => {
  menuBtn.style.display = 'block';
  hideMenuBtn.style.display = 'none';
  xtraBox.style.display = 'none';
  affichagesDy.style.display = 'block';
  deEvent.style.display = 'block';
  hold.style.display = 'block';
});
