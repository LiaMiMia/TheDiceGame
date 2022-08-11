/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
// je 'disable' ce paramètre car c'est le but de ces fonction de changer le dom
// le compteur

import { hold } from '../var/varDomEl.js';

function animateValueIncre(obj, start, end, duration) {
  const step = duration / (end - start);
  let html = start;
  const startAnim = setInterval(() => {
    html += 1;
    obj.innerHTML = html;
    if (html >= end) {
      hold.disabled = false;
      clearInterval(startAnim);
    }
  }, step);
}

function animateValueDecre(obj, start, end, duration) {
  const step = duration / (start - end);
  let html = start;
  const startAnim = setInterval(() => {
    html -= 1;
    obj.innerHTML = html;
    if (html <= 0) {
      hold.disabled = false;
      clearInterval(startAnim);
    }
  }, step);
}

export { animateValueIncre, animateValueDecre };
