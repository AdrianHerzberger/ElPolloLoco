function toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    let display =  (toggle) ? 'block' : 'none'; 
    if (element) {
        element.style.display = display;
    }
}

function startGame() {
    let startScreen = document.getElementById('startScreen');
    startScreen.innerHTML = '';
    toggleScreen('start-screen', false);
    toggleScreen('canvas', true);
    init();
}

function showEndScreen() {
    let gameScreen = document.getElementById('canvas');
    gameScreen.innerHTML = '';
    toggleScreen('canvas', false);
    toggleScreen('end-screen', true);
}