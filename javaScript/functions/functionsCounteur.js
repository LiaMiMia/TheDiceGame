/* eslint-disable no-param-reassign */
// car c'est le but de la fonction de modifier le html ...
// le compteur
function animateValue(obj, start, end, duration) {
  const step = duration / (end - start);
  let html = start;
  let startAnim;

  if (end === 0) {
    if (obj.innerHTML !== '0') {
      startAnim = setInterval(() => {
        html -= 1;
        obj.innerHTML = html;

        if (html <= 0) {
          clearInterval(startAnim);
        }
      }, step);
    }
  } else {
    startAnim = setInterval(() => {
      html += 1;
      // eslint-disable-next-line no-param-reassign
      obj.innerHTML = html;

      if (html >= end) {
        clearInterval(startAnim);
      }
    }, step);
  }
}

// import { animateValue } from 'functions/functionsCounteur.js';
export default animateValue;
