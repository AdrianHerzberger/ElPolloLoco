class Cloud extends MovableObject {
    y = 0;
    width = 1250;
    heigth = 450;

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = 0 + Math.random() * 500;
        this.animate();
    }
    
    animate() {
        this.moveLeft();
    }

}