const choices = ['rock', 'paper', 'scissors'];
let you = 0;
let computer = 0;
let ties = 0;

function computer_choice() {
    let rnd = Math.floor(Math.random() * 3); //Math.random gives 0-1 float numbers
    return choices[rnd];
}
function choose(chs) {
    let player = choices[chs];
    let computer = computer_choice();

    let computerResultElement = document.getElementById('computerChoice');
    computerResultElement.innerHTML = computer.toUpperCase();

    let yourResultElement = document.getElementById('yourChoice');
    yourResultElement.innerHTML = player.toUpperCase();

    who_win(player, computer);
}

function who_win(chc, rnd) {
    if (chc === 'rock' && rnd === 'scissors' ||
        chc === 'paper' && rnd === 'rock' ||
        chc === 'scissors' && rnd === 'paper') {
        up('win');
    }

    else if (chc === 'rock' && rnd === 'paper' ||
        chc === 'paper' && rnd === 'scissors' ||
        chc === 'scissors' && rnd === 'rock') {
        up('lose');
    }

    else {
        up('tie');
    }
}

function up(score) {
    if (score === 'win') {
        let playerElement = document.getElementById("you");
        playerElement.innerHTML = you += 1;
    }
    else if (score === 'lose') {
        let computerElement = document.getElementById("computer");
        computerElement.innerHTML = computer += 1;
    }
    else {
        let tiesElement = document.getElementById("ties");
        tiesElement.innerHTML = ties += 1;
    }
}