let imgScene;
let imgChar;
let imgEnemy;

let scene;
let char;
let bgSound;
let jumpSound;
let enemy;

function preload(){
    imgScene = loadImage('./images/bg/far-buildings.png');
    imgMedium = loadImage('./images/bg/back-buildings.png');
    imgFore = loadImage('./images/bg/foreground.png');
    imgChar = loadImage('./images/char/running.png');
    imgEnemy = loadImage('./images/enemies/drop.png');
    bgSound = loadSound('./sound/bg_sound.mp3');
    jumpSound = loadSound('./sound/jump_sound.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    scene = new Background(imgScene, 15);
    background = new Background(imgMedium, 10);
    foreground = new Background(imgFore, 5);
    char = new Character(imgChar, 0, 110, 135, 220, 270, 660, 810);
    enemy = new Enemy(imgEnemy, windowWidth - 52, 52, 50, 105, 100, 312, 624)
    frameRate(42);
    bgSound.loop();
}

function keyPressed() {
    if(key == 'ArrowUp') {
        jumpSound.play();
        char.jump();
    }
}
function draw() {
    scene.show();
    background.show();
    foreground.show();
    enemy.show();
    enemy.move();
    char.show();
    char.applyGravity();
    if(char.colliding(enemy)) { 
        console.log("COLLISION");
        bgSound.stop(); 
        noLoop();
    }
    
}