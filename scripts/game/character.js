
class Character extends Animate{
    constructor(image, x, width, height, spriteWidth, spriteHeight, spriteX, spriteY, spriteXMax, spriteYMax) {
        super(image, x, width, height, spriteWidth, spriteHeight, spriteX, spriteY, spriteXMax, spriteYMax);
        this.ground = windowHeight - this.height;
        this.y = this.ground;
        this.jumpSpeed = 0;
        this.gravity = 3;
    }

    jump() {
        this.jumpSpeed = -35;
    }

    applyGravity() {
        this.y += this.jumpSpeed;
        this.jumpSpeed += this.gravity;
        if(this.y > this.ground) { this.y = this.ground; }
    }

    colliding(enemy){
        const precision = .7;
        return collideRectRect(this.x, this.y, this.width * precision, this.height * precision, enemy.x, enemy.y, enemy.width * precision, enemy.height * precision);
    }
}