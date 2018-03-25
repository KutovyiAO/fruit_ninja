// выбрал таймер
var timer = document.getElementById('timer');
// выбрал круг
var ball = document.querySelector('#ball');
// начало игры
var startButton = document.querySelector('#start_button');
var gameStart = document.getElementById('game_start');

var time = 60;

startButton.onclick = function () {
    startButton.style.display = 'none';
    gameStart.style.display = 'none';

    setInterval(countDown, 1000)
}

// действия с кругом при нажатии
ball.onclick = function () {

    ball.style.background = 'yellow';

    var width = ball.clientWidth - 1;
    var height = ball.clientHeight - 1;

    ball.style.width = width + 'px';    //устанавливаем значение в пикселях
    ball.style.height = height + 'px';

    ballMove();
    clicker();

    if (ball.style.display == 'none') {
        ball.style.display = 'block';
    }

    if (width == 10) {
        finishGame();
        start();
    }
}

function ballMove() {

    ball.style.top = randomMath() + "px";
    ball.style.left = randomMath() + "px";
}

function start() {
    startButton.style.display = 'block';
    gameStart.style.display = 'block';

    ball.style.width = 100 + 'px';
    ball.style.height = 100 + 'px';

    ball.style.background = 'red';

}

function randomMath() {

    return Math.floor(Math.random() * 300)
}

var clickerEl = document.getElementById('clicker');

var clickerScore = 0;

function clicker() {

    clickerScore = clickerScore + 1;

    clickerEl.innerText = clickerScore;
}

function countDown() {

    if (time >= 0) {

        time = time - 1;

        timer.innerText = time;

    } else {

        finishGame()

    }
}

function finishGame() {

    start();

}

// TODO
/*
добавить нормальный рестарт игры
условия победы и поражения

*/








