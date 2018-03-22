// выбрал таймер
var timer = document.querySelector('.timer span');

timer.style.color = 'red'; // присвоил цвет

// выбрал круг
var ball = document.querySelector('#ball');

// начало игры
var startButton = document.querySelector('#start_button');
var gameStart = document.getElementById('game_start');

startButton.onclick = function () {
    startButton.style.display = 'none';
    gameStart.style.display = 'none';
}

// действия с кругом при нажатии
ball.onclick = function () {

    ball.style.background = 'yellow';

    var width = ball.clientWidth - 10;
    var height = ball.clientHeight - 10;

    ball.style.width = width + 'px'; //устанавливаем значение в пикселях
    ball.style.height = height + 'px';

    var ballDisplayNone = (ball.style.display = 'none');

    if (ballDisplayNone) {
        ball.style.display = 'block';
    }

    if (width == 10) {
        alert('Game over');
        start()
    }
}

function start() {
    startButton.style.display = 'block';
    gameStart.style.display = 'block';

    ball.style.width = 100 + 'px';
    ball.style.height = 100 + 'px';

    ball.style.background = 'red';
}






