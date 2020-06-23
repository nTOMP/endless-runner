let imgCena;
let imgChar;
let cena;
let char;
let bgSound;

function preload(){
    imgCena = loadImage('./images/bg/forest.png');
    imgChar = loadImage('./images/char/running.png');
    bgSound = loadSound('./sound/bg_sound.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cena = new Background(imgCena, 3);
    char = new Character(imgChar);
    frameRate(42);
    bgSound.loop();
}

function draw() {
    cena.show();
    cena.move();
    char.show();
}