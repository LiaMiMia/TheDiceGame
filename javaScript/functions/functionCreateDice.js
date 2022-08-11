/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as THREE from 'https://unpkg.com/three@0.142.0/build/three.module.js';
import {
  secondColor,
  thirdColor,
}
  from '../var/varOthers.js';
import { toRad } from './functionsDice.js';

// fonction qui crée les dés
function createDice() {
  // à ce stade on a un écran noir basta la base de la scene
  // les points
  const pointGeometrie = new THREE.CylinderGeometry(0.1, 0.1, 1, 10);
  const pointMaterial = new THREE.MeshToonMaterial({ color: thirdColor });

  // face1
  const point1 = new THREE.Mesh(pointGeometrie, pointMaterial);
  point1.translateY(0.01);

  // face6
  const point6a = new THREE.Mesh(pointGeometrie, pointMaterial);
  point6a.translateY(-0.01);
  point6a.translateX(1 / 6);

  const point6b = new THREE.Mesh(pointGeometrie, pointMaterial);
  point6b.translateY(-0.01);
  point6b.translateX(-1 / 6);

  const point6c = new THREE.Mesh(pointGeometrie, pointMaterial);
  point6c.translateY(-0.01);
  point6c.translateX(-1 / 6);
  point6c.translateZ(1 / 3);

  const point6d = new THREE.Mesh(pointGeometrie, pointMaterial);
  point6d.translateY(-0.01);
  point6d.translateX(-1 / 6);
  point6d.translateZ(-1 / 3);

  const point6e = new THREE.Mesh(pointGeometrie, pointMaterial);
  point6e.translateY(-0.01);
  point6e.translateX(1 / 6);
  point6e.translateZ(-1 / 3);

  const point6f = new THREE.Mesh(pointGeometrie, pointMaterial);
  point6f.translateY(-0.01);
  point6f.translateX(1 / 6);
  point6f.translateZ(1 / 3);

  // face 4
  const point4a = new THREE.Mesh(pointGeometrie, pointMaterial);
  point4a.translateY(1 / 4);
  point4a.translateX(1 / 4);
  point4a.translateZ(-0.01);
  point4a.rotateX(toRad(90));

  const point4b = new THREE.Mesh(pointGeometrie, pointMaterial);
  point4b.translateY(-1 / 4);
  point4b.translateX(-1 / 4);
  point4b.translateZ(-0.01);
  point4b.rotateX(toRad(90));

  const point4c = new THREE.Mesh(pointGeometrie, pointMaterial);
  point4c.translateY(-1 / 4);
  point4c.translateX(1 / 4);
  point4c.translateZ(-0.01);
  point4c.rotateX(toRad(90));

  const point4d = new THREE.Mesh(pointGeometrie, pointMaterial);
  point4d.translateY(1 / 4);
  point4d.translateX(-1 / 4);
  point4d.translateZ(-0.01);
  point4d.rotateX(toRad(90));

  // face3
  const point3a = new THREE.Mesh(pointGeometrie, pointMaterial);
  point3a.translateZ(0.01);
  point3a.rotateX(toRad(90));

  const point3b = new THREE.Mesh(pointGeometrie, pointMaterial);
  point3b.translateZ(0.01);
  point3b.translateY(1 / 4);
  point3b.translateX(-1 / 4);
  point3b.rotateX(toRad(90));

  const point3c = new THREE.Mesh(pointGeometrie, pointMaterial);
  point3c.translateZ(0.01);
  point3c.translateY(-1 / 4);
  point3c.translateX(1 / 4);
  point3c.rotateX(toRad(90));

  // face 5
  const point5a = new THREE.Mesh(pointGeometrie, pointMaterial);
  point5a.translateX(0.01);
  point5a.rotateZ(toRad(90));

  const point5b = new THREE.Mesh(pointGeometrie, pointMaterial);
  point5b.translateX(0.01);
  point5b.translateY(-1 / 4);
  point5b.translateZ(1 / 4);
  point5b.rotateZ(toRad(90));

  const point5c = new THREE.Mesh(pointGeometrie, pointMaterial);
  point5c.translateX(0.01);
  point5c.translateY(1 / 4);
  point5c.translateZ(-1 / 4);
  point5c.rotateZ(toRad(90));

  const point5d = new THREE.Mesh(pointGeometrie, pointMaterial);
  point5d.translateX(0.01);
  point5d.translateY(-1 / 4);
  point5d.translateZ(-1 / 4);
  point5d.rotateZ(toRad(90));

  const point5e = new THREE.Mesh(pointGeometrie, pointMaterial);
  point5e.translateX(0.01);
  point5e.translateY(1 / 4);
  point5e.translateZ(1 / 4);
  point5e.rotateZ(toRad(90));

  // face2
  const point2a = new THREE.Mesh(pointGeometrie, pointMaterial);
  point2a.translateX(-0.01);
  point2a.translateY(1 / 4);
  point2a.translateZ(1 / 4);
  point2a.rotateZ(toRad(90));

  const point2b = new THREE.Mesh(pointGeometrie, pointMaterial);
  point2b.translateX(-0.01);
  point2b.translateY(-1 / 4);
  point2b.translateZ(-1 / 4);
  point2b.rotateZ(toRad(90));

  // le cube à animer
  const geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);
  const material = new THREE.MeshToonMaterial({ color: secondColor });
  const forme = new THREE.Mesh(geometry, material);

  // ajout des points au dé
  forme.add(point2a, point2b);
  forme.add(point5a, point5b, point5c, point5d, point5e);
  forme.add(point3c, point3b, point3a);
  forme.add(point4d, point4c, point4b, point4a);
  forme.add(point6f, point6e, point6d, point6c, point6b, point6a);
  forme.add(point1);

  return forme;
}

export default createDice;
