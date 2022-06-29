//Including just to confirm code.js is properly linked into index.html
console.log("Hello world!");

//Ask user to input rock/paper/scissors and store response as string in variable playerChoice
//Convert playerChoice to all lowercase
//If playerChoice does not strictly equal 'rock', 'paper', or 'scissors', reprompt user for choice.

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

        console.log(random1 + ' ' + random2 + ' ' + random3);

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

        console.log(output + '\n' + keepGoing);

    } while (keepGoing == true);

    return output;
}

computerPlay();

//Log playerChoice and computerChoice to console.

//Compare playerChoice to computerChoice as follows:
//If playerChoice is equal to computerChoice, log 'It's a tie!' and go back to start
//If playerChoice is rock and computerChoice is scissors, log 'You win!' and go back to start.
//Else log 'you lose' and go back to start. **repeating go back to starts suggest switch statement may be best**
//Repeat per RPS rules for cases of playerChoice 'scissors' and 'paper'.
