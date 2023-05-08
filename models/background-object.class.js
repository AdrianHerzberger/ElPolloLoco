class BackgroundObject extends MovableObject {
    width = 1250;
    heigth = 680;
    
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 680 - this.heigth;
    }
}