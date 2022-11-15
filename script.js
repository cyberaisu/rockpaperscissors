let choices = ['rock', 'paper', 'scissors'];
let playerChoice = prompt();


function getComputerChoice (choices) {
    return choices[Math.floor(Math.random() * 3)];
}


function playRound(computerSelection, playerSelection) {
    let computer = computerSelection.toLowerCase();
    let player = playerSelection.toLowerCase();
    let result;

    if (computer == 'scissors' && player == 'paper' || computer == 'rock' && player == 'scissors' || computer == 'paper' && player == 'rock' ) {
        result = 'lose';
    } else if (computer == player) {
        result = 'tie';
    } else {
        result = 'win';
    }
    return result;
}

function game() {
    let loseCount = 0;
    let winCount = 0;
    for(let i = 0; i < 5; i++) {
        if (playRound(getComputerChoice(choices), playerChoice) == 'lose'){
            loseCount = loseCount + 1;
        } 
        if (playRound(getComputerChoice(choices), playerChoice) == 'win') {
            winCount = winCount + 1;
        }
        console.log(loseCount, winCount);
    }

    console.log('result', loseCount, winCount);

    if (loseCount > winCount){
        return 'Computer wins';
    } else if (loseCount < winCount){
        return 'Player wins';
    } else {
        return 'It\'s a tie!';
    }
}

console.log(game());