let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

window.addEventListener('keydown', (event) => {
    if(event.keyCode == 39) {
        keyboard.RIGHT = true;
        document.querySelector('.input-button.arrow-right').style.backgroundColor = '#F3A956';
    }
    if(event.keyCode == 37) {
        keyboard.LEFT = true;
        document.querySelector('.input-button.arrow-left').style.backgroundColor = '#F3A956';
    }
    if(event.keyCode == 40) {
        keyboard.UP = true;
        document.querySelector('.input-button.arrow-up').style.backgroundColor = '#F3A956';
    }
    if(event.keyCode == 38) {
        keyboard.DOWN = true;
        document.querySelector('.input-button.arrow-down').style.backgroundColor = '#F3A956';
    }
    if(event.keyCode == 32) {
        keyboard.SPACE = true;
        document.querySelector('.input-button.arrow-jump').style.backgroundColor = '#F3A956';
    }
    if(event.keyCode == 70) {
        keyboard.THROW = true;
        document.querySelector('.input-button.arrow-throw').style.backgroundColor = '#F3A956';
    }
});

window.addEventListener('keyup', (event) => {
    if(event.keyCode == 39) {
        keyboard.RIGHT = false;
        document.querySelector('.input-button.arrow-right').style.backgroundColor = '';
    }
    if(event.keyCode == 37) {
        keyboard.LEFT = false;
        document.querySelector('.input-button.arrow-left').style.backgroundColor = '';
    }
    if(event.keyCode == 40) {
        keyboard.UP = false;
        document.querySelector('.input-button.arrow-up').style.backgroundColor = '';
    }
    if(event.keyCode == 38) {
        keyboard.DOWN = false;
        document.querySelector('.input-button.arrow-down').style.backgroundColor = '';
    }
    if(event.keyCode == 32) {
        keyboard.SPACE = false;
        document.querySelector('.input-button.arrow-jump').style.backgroundColor = '';
    }
    if(event.keyCode == 70) {
        keyboard.THROW = false;
        document.querySelector('.input-button.arrow-throw').style.backgroundColor = '';
    }
});