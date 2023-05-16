let startScreen = document.getElementById('startScreen');
let endScreen = document.getElementById('endScreen');

function toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    let display = (toggle) ? 'block' : 'none';
    if (element) {
        element.style.display = display;
    }
}

function startGame() {
    toggleScreen('startScreen', false);
    toggleScreen('game', true);
    init();
}

function gameOver() {
    toggleScreen('game', false);
    toggleScreen('endScreen', true);
}

function restartGame() {
   this.location.reload('index.hmtl');
}



    
