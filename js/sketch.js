let canvas;
let xPos = 0;
let yPos = 0;
let easing = 0.1;
let treeImg;

function preload() {
    treeImg = loadImage("images/pinktree.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-2");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);
}

function drawThing(_x, _y) {
    if (treeImg) {
        imageMode(CENTER); 
        image(treeImg, _x, _y, 65, 65); 
}
}