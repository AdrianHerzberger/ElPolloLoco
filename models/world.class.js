class World {
    ctx;
    canvas;
    keyboard;
    level = level1;
    camera_x = 0;
    throwableObjects = [];
    character = new Character();
    statusBar = new StatusBar();
    statusBottle = new BottlesBar();
    statusCoins = new CoinsBar();
    clearRect =  new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0);
    
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.THROW) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
        this.throwableObjects.forEach( throwableObject =>{
            this.level.enemies.forEach( enemy =>{
                if(!enemy.isDead()){
                    if(throwableObject.isColliding(enemy)){
                        enemy.kill();
                        setTimeout(()=>{
                            let position = this.level.enemies.indexOf(enemy);
                            this.level.enemies.splice(position, 1);
                        }, 2000);
                    }
                }
            });
        } );
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
        
        if (this.level.character) {
            this.level.character.forEach((bottles) => {
                if (this.character.isColliding(bottles)) {
                    this.character.collideWith();
                    this.statusBottle.setBottles(this.character.amount);
                }
            });
        }

        if (this.level.character) {
            this.level.character.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    this.character.collideWith();
                    this.statusCoins.setCoins(this.character.amount);
                }
            });
        }

        this.checkCollisionsWithCollectibles(this.level.coins);
        this.checkCollisionsWithCollectibles(this.level.bottles);
    }

    checkCollisionsWithCollectibles(array) {
        if (array) {
            array.forEach((element, index) => {
                if (this.character.isColliding(element)) {
                    array.splice(index, 1);
                }
            });
        }
    }
    
    draw() {
        this.addToMap(this.clearRect);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character); 
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        
        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusBar);
        this.addToMap(this.statusBottle);
        this.addToMap(this.statusCoins);
        
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
         }
        if(mo instanceof BackgroundObject){
            this.ctx.translate(this.camera_x * mo.distance, 0);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if(mo instanceof BackgroundObject){
            this.ctx.translate(-this.camera_x * mo.distance, 0);
        }
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}