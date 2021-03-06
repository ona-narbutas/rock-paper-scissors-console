//Including just to confirm code.js is properly linked into index.html
//console.log("Hello world!");

//Ask user to input rock/paper/scissors and store response as string in variable playerChoice
//Convert playerChoice to all lowercase
//If playerChoice does not strictly equal 'rock', 'paper', or 'scissors', reprompt user for choice.

function askPlayer() {
    let output;

    while (output !== 'rock' && output !== 'paper' && output !== 'scissors') {
        output = prompt('Rock, paper, or scissors?');
        output = output.toLowerCase();

        //console.log(output);

    }

    return output;
}



//Create variable computerChoice
//Generate random number 3 times, storing each in variables random1, random2, and random3, respectively
//If random1 is higher than random2 or random3, set computerChoice to string 'rock.'
    //Else if random2 is highest, set computerChoice to string 'scissors'
    //Else if random3 is highest, set computerChoice to string 'paper'
    //Else if there is a tie for highest value, reroll.

function computerPlay() {

    let output;
    let keepGoing = false

    do {
        let random1 = Math.random();
        let random2 = Math.random();
        let random3 = Math.random();

        //console.log(random1 + ' ' + random2 + ' ' + random3);

        if (random1 > random2 && random1 > random3) {
            output = 'rock';
            keepGoing = false;
        } else if (random2 > random1 && random2 > random3) {
            output = 'paper';
            keepGoing = false;
        } else if (random3 > random1 && random3 > random2) {
            output = 'scissors';
            keepGoing = false;
        } else keepGoing = true;

        //console.log(output + '\n' + keepGoing);

    } while (keepGoing == true);

    return output;
}


//Compare playerChoice to computerChoice as follows:
//If playerChoice is equal to computerChoice, return 'It's a tie!' and go back to start
//If playerChoice is rock and computerChoice is scissors, return 'You win!' and go back to start.
//Else return 'you lose' and go back to start. **repeating go back to starts suggest switch statement may be best**
//Repeat per RPS rules for cases of playerChoice 'scissors' and 'paper'.

function playRound(playerSelection, computerChoice) {
    let result;
    
    if (playerSelection === computerChoice) {
        result = 'It\'s a tie!';
        return result;
    } else switch(playerSelection) {
        case 'rock':
            computerChoice == 'scissors' ? result = `You win! ${playerSelection} beats ${computerChoice}.`
            : result = `You lose. ${computerChoice} beats ${playerSelection}.`;
            return result;
            break;

        case 'paper':
            computerChoice == 'rock' ? result = `You win! ${playerSelection} beats ${computerChoice}.`
            : result = `You lose. ${computerChoice} beats ${playerSelection}.`;
            return result;
            break;

        case 'scissors':
            computerChoice == 'paper' ? result = `You win! ${playerSelection} beats ${computerChoice}.`
            : result = `You lose. ${computerChoice} beats ${playerSelection}.`;
            return result;
            break;

    }
}

//Create variable playerScore and variable computerScore and set both to 0
//call playRound. Increase playerScore or computerScore depending on who wins 
    //(get slice first five characters of playRound()'s return value to determine who won)
//Repeat for a total of five games

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        let playerSelection = askPlayer();
        let computerSelection = computerPlay();

        let winner = playRound(playerSelection, computerSelection);
        console.log(winner)
        
        //console.log(typeof(winner));

        winnerSub = winner.slice(0, 5);

        //console.log(winnerSub);

        if (winnerSub === 'You w') {
            playerScore = ++playerScore;
        } else if (winnerSub === 'You l') {
            computerScore = ++computerScore;
        }

        console.log(`The score is: You: ${playerScore}. Computer: ${computerScore}.`);

    }

    if (playerScore > computerScore) {
        console.log(`You won best of 5!`)
    } else if (computerScore > playerScore) {
        console.log(`The computer won best of 5.`)
    } else {
        console.log(`At the end of five rounds, just a stalemate...`)
    }
}

game();