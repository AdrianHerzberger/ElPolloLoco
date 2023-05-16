let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    let intro_audio = new Audio('audio/el_pollo_loco.mp3')
    intro_audio.play()
    addTouchListeners();
}

function addTouchListeners() {
    const arrowRightButton = document.querySelector('.input-button.arrow-right');
    const arrowLeftButton = document.querySelector('.input-button.arrow-left');
    const arrowJumpButton = document.querySelector('.input-button.arrow-jump');
    const arrowThrowButton = document.querySelector('.input-button.arrow-throw');

    arrowRightButton.addEventListener('touchstart', () => {
        keyboard.RIGHT = true;
        arrowRightButton.style.backgroundColor = '#F3A956';
    });

    arrowRightButton.addEventListener('touchend', () => {
        keyboard.RIGHT = false;
        arrowRightButton.style.backgroundColor = '';
    });

    arrowLeftButton.addEventListener('touchstart', () => {
        keyboard.LEFT = true;
        arrowLeftButton.style.backgroundColor = '#F3A956';
    });

    arrowLeftButton.addEventListener('touchend', () => {
        keyboard.LEFT = false;
        arrowLeftButton.style.backgroundColor = '';
    });

    arrowJumpButton.addEventListener('touchstart', () => {
        keyboard.SPACE = true;
        arrowJumpButton.style.backgroundColor = '#F3A956';
    });

    arrowJumpButton.addEventListener('touchend', () => {
        keyboard.SPACE = false;
        arrowJumpButton.style.backgroundColor = '';
    });

    arrowThrowButton.addEventListener('touchstart', () => {
        keyboard.THROW = true;
        arrowThrowButton.style.backgroundColor = '#F3A956';
    });

    arrowThrowButton.addEventListener('touchend', () => {
        keyboard.THROW = false;
        arrowThrowButton.style.backgroundColor = '';
    });
}

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
        document.querySelector('.input-button.arrow-right').style.backgroundColor = '#F3A956';
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
        document.querySelector('.input-button.arrow-left').style.backgroundColor = '#F3A956';
    }
    if (event.keyCode == 40) {
        keyboard.UP = true;
        document.querySelector('.input-button.arrow-up').style.backgroundColor = '#F3A956';
    }
    if (event.keyCode == 38) {
        keyboard.DOWN = true;
        document.querySelector('.input-button.arrow-down').style.backgroundColor = '#F3A956';
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
        document.querySelector('.input-button.arrow-jump').style.backgroundColor = '#F3A956';
    }
    if (event.keyCode == 70) {
        keyboard.THROW = true;
        document.querySelector('.input-button.arrow-throw').style.backgroundColor = '#F3A956';
    }
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
        document.querySelector('.input-button.arrow-right').style.backgroundColor = '';
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
        document.querySelector('.input-button.arrow-left').style.backgroundColor = '';
    }
    if (event.keyCode == 40) {
        keyboard.UP = false;
        document.querySelector('.input-button.arrow-up').style.backgroundColor = '';
    }
    if (event.keyCode == 38) {
        keyboard.DOWN = false;
        document.querySelector('.input-button.arrow-down').style.backgroundColor = '';
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
        document.querySelector('.input-button.arrow-jump').style.backgroundColor = '';
    }
    if (event.keyCode == 70) {
        keyboard.THROW = false;
        document.querySelector('.input-button.arrow-throw').style.backgroundColor = '';
    }
});