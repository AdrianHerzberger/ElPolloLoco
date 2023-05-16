class CoinsBar extends DrawableObject {
    coins = 0;
    IMAGES_COINS = [
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/80__1.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/100__1.png'
    ];
    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.x = 30;
        this.y = 120;
        this.width = 200;
        this.height = 60;
        this.setCoins(0);
    }

    setCoins(coins) {
        this.coins = coins;
        let path = this.IMAGES_COINS[this.resolveImageIndexCoin()];
        this.img = this.imageCache[path];
    }

    resolveImageIndexCoin() {
        if (this.coins == 0) {
            return 0;
        } else if (this.coins == 1) {
            return 1;
        } else if (this.coins == 2) {
            return 2;
        } else if (this.coins == 3) {
            return 3;
        } else if (this.coins == 4) {
            return 4;
        } else {
            return 5;
        }
    }
}