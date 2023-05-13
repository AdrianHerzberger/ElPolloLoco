class BottlesToCollect extends MovableObject {
    width = 80;
    height = 80;
    y = 520 ;

    IMAGES_COLLECT_BOOTLES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_COLLECT_BOOTLES[0]);
        this.loadImages(this.IMAGES_COLLECT_BOOTLES);
        this.x = 400 + Math.random() * 500;
    }
}
