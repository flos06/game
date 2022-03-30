let computerScore = 0
let playerScore = 0

function start() {
 let gamechoice = prompt("Do you want to play Rock, Paper or Scissors?");
 let playerSelection = gamechoice.toLowerCase();
return playerSelection;
}

function computerPlay(){
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)];
}


function game() {
    for (let i = 0; i <5; i++) {
        playRound();
    }
}

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = start();

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore += 1;
        result = ('You win! ' + playerSelection + ' beats ' + 
        computerSelection + '<br><br> Player score: ' + playerScore + 'Computer score: ' + computerScore);
        
        }
    else if (playerSelection == computerSelection) {
        result = ('Its a Tie. You both chose: ' + playerSelection + 
        '<br><br>Player score: ' + playerScore + ' Computer score: ' + computerScore);
    }
    else {
        computerScore += 1;
        result = ('Computer wins! <br><br>'+ playerSelection + " beats " + computerSelection + "<br><br> Player Score: " + playerScore + 'Computer score: ' + computerScore)
        
    }
    
    document.getElementById('result').innerHTML = result
    return

    
}

