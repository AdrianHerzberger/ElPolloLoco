class BackgroundObject extends MovableObject  {
    width = 1250;
    height = 680;
    constructor(imagePath, x, distance = 1) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = distance
        this.distance = distance;
     }
}