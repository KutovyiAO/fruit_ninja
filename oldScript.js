//
var ballDiv = document.createElement('div');
ballDiv.id = "ball";

var game_area = document.getElementById('game_area');
game_area.appendChild(ballDiv);

// выбрал таймер

var timer = document.getElementById('timer');
// выбрал круг
var ball = document.querySelector('#ball');
// начало игры
var startButton = document.querySelector('#start_button');
var gameStart = document.getElementById('game_start');

var timerText = document.getElementById('timerText');

var text = document.getElementById('text');
var clik = document.getElementById('clicker');


var time = 10;

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
//устанавливаем значение в пикселях
    ball.style.width = width + 'px';
    ball.style.height = height + 'px';

    ballMove();
    clicker();

    var strike = document.getElementById('strike');
    strike.play();

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
    timer.remove();
    ball.remove();
    gameStart.remove();
    game_area.remove();
    timerText.remove();
    text.remove();
    clik.style.textDecoration = 'underline';
}


// TODO
/*
добавить нормальный рестарт игры
условия победы и поражения

*/








