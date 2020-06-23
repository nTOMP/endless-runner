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
    }
    
    move() {
        this.x1 -= this.speed;
        this.x2 -= this.speed;
        if(this.pos1 < - width)
            this.pos1 = width
        if(this.pos2 < - width)
            this.pos2 = width
    }
}