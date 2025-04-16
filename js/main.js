// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
let sceneContainer = document.querySelector
("#scene-container");

let piano;


import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xd3d3d3);



const camera = new THREE.PerspectiveCamera(75, sceneContainer.clientWidth / sceneContainer.clientHeight, 0.1, 1000);

const light = new THREE.DirectionalLight(0xffffff, 3)
light.position.set(1,1,5);
scene.add(light);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
sceneContainer.appendChild(renderer.domElement);



const geometry = new THREE.SphereGeometry( .2, 36, 16 );
// const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

const texture = new THREE.TextureLoader().load('textures/icecube.jpg')
const material = new THREE.MeshBasicMaterial( { map: texture } );

const ball = new THREE.Mesh( geometry, material );

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);

    // console.log(ball.position.x);

    if(piano){
    piano.rotation.x = Math.sin(Date.now() / 6000) * 0.2;
    piano.rotation.y = Math.sin(Date.now() / 5000) * 1.5;
    piano.rotation.z = Math.sin(Date.now() / 8000) * 0.1;
    }   

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = sceneContainer.clientWidth / sceneContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);

}

window.addEventListener('resize', onWindowResize, false);


const lightleft = new THREE.DirectionalLight (0xffffff,3);
lightleft.position.set(3,4,5);
scene.add(lightleft);

// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader(); // to load 3d models

loader.load('assets/piano1.gltf', function(gltf){
    piano = gltf.scene;
    scene.add(piano);
    piano.scale.set(1.5,1.5,1.5);
    piano.position.y = -2;


});



// ~~~~~~~~~~~~~~~~ Create scene here ~~~~~~~~~~~~~~~~
// →→→→→→ Follow next steps in tutorial: 
// // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

animate();

