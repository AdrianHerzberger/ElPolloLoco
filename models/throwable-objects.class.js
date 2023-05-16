class ThrowableObject extends MovableObject {
    IMAGE_ROTATION_BOTTLE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    throwing = false;
    throwing_sound = new Audio('audio/throw.mp3');

    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGE_ROTATION_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 60;
        this.throw();
        this.animate();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

    animate() {
        this.throwing_sound.pause();
        let throwingInterval = setInterval(() => {
            if (this.throwing = true) {
                this.playAnimation(this.IMAGE_ROTATION_BOTTLE);
                this.throwing_sound.play();
                setTimeout(() => {
                    this.throwing_sound.volume = 0;
                    clearInterval(throwingInterval);
                }, 1000);
            }
        }, 100);
    }
} 