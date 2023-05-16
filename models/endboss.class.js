class EndBoss extends MovableObject{
    height = 400;
    width = 250;
    y = 220; 

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    ];

    IMAGES_SPAWNING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
    ];
    
    dead_sound = new Audio('audio/chicken.mp3');
    win_sound = new Audio('audio/win.mp3');
    hasContactWithEnemy =  false;

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_SPAWNING);
        this.x = 2500;
        this.speed = 10;
        this.animate();
    }

    animate() {
      let i = 0;
      let endBossInterval = setInterval(() => {

        if (i < 10) {
          if (this.character && this.character.x > 1500 && !hasContactWithEnemy) {
            this.hasContactWithEnemy = true;
            this.playAnimation(this.IMAGES_SPAWNING);
          } else {
            this.playAnimation(this.IMAGES_WALKING);
          }
        } else if (this.isDead()) {
          this.playAnimation(this.IMAGES_DEAD);
          this.dead_sound.play();
          this.win_sound.play();
          setTimeout(()=> {
            this.dead_sound.volume = 0;
            this.win_sound.volume = 0;
            clearInterval(endBossInterval);
          }, 1000);
          setTimeout(()=> {
            restartGame();
          }, 2000);  
        } else {
          this.playAnimation(this.IMAGES_WALKING);
        }
    
        i++;
      
      }, 150);
  }
}