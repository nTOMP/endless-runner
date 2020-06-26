class Animate {
    
    constructor(image, x, width, height, spriteWidth, spriteHeight, spriteXMax, spriteYMax) {
        this.image = image;
        this.x = x;
        this.width = width;
        this.height = height;
        this.y = windowHeight - height;
        this.spriteHeight = spriteHeight;
        this.spriteWidth = spriteWidth;
        
        this.animaX = 0;
        this.animaY = 0;
        this.yMax = spriteYMax;
        this.xMax = spriteXMax;
    }

    show(){
        image(this.image, this.x, this.y, this.width, this.height, this.animaX, this.animaY, this.spriteWidth, this.spriteHeight);
        this.animate();
    }

    animate(){
        this.animaX += this.spriteWidth;
        if(this.animaX > this.xMax) {
            this.animaX = 0;
            this.animaY += this.spriteHeight;
            if(this.animaY > this.yMax) {
                this.animaY = 0;
            }
        }
    }
}