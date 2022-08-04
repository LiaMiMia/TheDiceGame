/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as THREE from 'https://unpkg.com/three@0.142.0/build/three.module.js';
import { deEvent } from './varDomEl.js';

const scene = new THREE.Scene();// crée une nouvelle scene
const camera = new THREE.PerspectiveCamera(
  75,
  deEvent.clientWidth / deEvent.clientHeight,
  0.1,
  1000,
);
// crée la caméra
// va générer l'image final, alpha true va permettre de rendre le renderer transparent
const renderer = new THREE.WebGLRenderer({ alpha: true });
const light = new THREE.PointLight(0xFFFFFF, 1, 10000);

export {
  scene, camera, renderer, light,
};
