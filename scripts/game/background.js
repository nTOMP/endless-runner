class Background{
    constructor(image, speed) {
        this.image = image;
        this.speed = speed;
        this.pos1 = 0;
        this.pos2 = width;
    }

    show() {
        image(this.image, this.pos1, 0, width, height);
        image(this.image, this.pos2, 0, width, height);
        this.move();
    }
    
    move() {
        this.pos1 -= this.speed;
        this.pos2 -= this.speed;
        if(this.pos1 < - width + 1)
            this.pos1 = width
        if(this.pos2 < - width + 1)
            this.pos2 = width
    }
}