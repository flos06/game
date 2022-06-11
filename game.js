let computerScore = 0
let playerScore = 0

const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    playRound('rock')
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    playRound('scissors')
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    playRound('paper')
})



function computerPlay(){
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)];
}


function game() {
    for (let i = 0; i <5; i++) {
        playRound();
    }
}

function playRound(choice) {
    let computerSelection = computerPlay();
    let playerSelection = choice;


    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore += 1;
        if (playerScore == 5){
            playerScore = 0;
            result = ('Player wins the series!')
        }
        else {result = ('You win! ' + playerSelection + ' beats ' + 
        computerSelection + '<br><br> Player score: ' + playerScore + 'Computer score: ' + computerScore);
    }
        }
    else if (playerSelection == computerSelection) {
        result = ('Its a Tie. You both chose: ' + playerSelection + 
        '<br><br>Player score: ' + playerScore + ' Computer score: ' + computerScore);
    }
    else {
        computerScore += 1;
        if (computerScore == 5){
            computerScore = 0;
            result =('Computer wins the series!')
        }
        else {
        result = ('Computer wins! <br><br>'+ playerSelection + " loses to  " + computerSelection + "<br><br> Player Score: " + playerScore + 'Computer score: ' + computerScore)
        }
    }
    
    document.getElementById('result').innerHTML = result
    return

    
}

