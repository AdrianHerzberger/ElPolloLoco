let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character);
}


window.addEventListener('keydown', (event) => {
    if(event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if(event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if(event.keyCode == 40) {
        keyboard.UP = true;
    }
    if(event.keyCode == 38) {
        keyboard.DOWN = true;
    }
    if(event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if(event.keyCode == 70) {
        keyboard.THROW = true;
    }
    console.log(event);
});

window.addEventListener('keyup', (event) => {
    if(event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if(event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if(event.keyCode == 40) {
        keyboard.UP = false;
    }
    if(event.keyCode == 38) {
        keyboard.DOWN = false;
    }
    if(event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if(event.keyCode == 70) {
        keyboard.SPACE = false;
    }
    if(event.keyCode == 70) {
        keyboard.THROW = false;
    }
    console.log(event);
});