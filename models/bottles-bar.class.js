class BottlesBar extends DrawableObject {
    bottles = 0;
    IMAGES_BOTTLES = [
        'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png',
    ];
    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLES);
        this.x = 30;
        this.y = 60;
        this.width = 200;
        this.height = 60;
        this.setBottles(0);
    }

    setBottles(bottles) {
        this.bottles = bottles;
        let path = this.IMAGES_BOTTLES[this.resolveImageIndexBottle()];
        this.img = this.imageCache[path];
    }

    resolveImageIndexBottle() {
        if (this.bottles == 0) {
            return 0;
        } else if (this.bottles == 1) {
            return 1;
        } else if (this.bottles == 2) {
            return 2;
        } else if (this.bottles == 3) {
            return 3;
        } else if (this.bottles == 4) {
            return 4;
        } else {
            return 5;
        }
    }
}