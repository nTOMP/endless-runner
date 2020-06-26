class Enemy extends Animate{
    constructor(image, x, width, height, spriteWidth, spriteHeight, spriteX, spriteY, spriteXMax, spriteYMax) {
        super(image, x, width, height, spriteWidth, spriteHeight, spriteX, spriteY, spriteXMax, spriteYMax);
        this.speed = 5
    }

    move() {
        this.x -= this.speed;
        if(this.x < - this.height) {
            this.x = windowWidth;
        }
    }
}