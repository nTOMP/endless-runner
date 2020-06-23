class Character {
    constructor(image) {
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.yMax = 810;
        this.xMax = 660;
    }

    show(){
        image(this.image, 0, height - 135, 110, 135, this.x, this.y, 220, 270);
        this.animate();
    }

    animate(){
        this.x += 220;
        if(this.x > this.xMax) {
            this.x = 0;
            this.y += 270;
            if(this.y > this.yMax) {
                this.y = 0;
            }
        }
    }
}