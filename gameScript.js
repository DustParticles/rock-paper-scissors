
button = document.getElementById("rpsButton");
button.addEventListener("click", play);

//stores players wins and bots
let wins = 0;
let robotWin = 0;
let rpmHand = ["rock", "paper", "scissor"];
//function draws random number between 0-2
function computerPlay() {
    console.log("inside computerPlay")
    return Math.floor(Math.random() * 3)

}

//checks who won
let checksWhoWon = function(playerSelection, computerMove) {

    //cheap way to make userInput text not case sensitive by making them
    //lowercase or uppercase
    playerSelection.toLowerCase();
    console.log("am i a global func or local func 🤔")
    //compares the random number the computer chose
    if (playerSelection == rpmHand[computerMove]) {
        console.log("draw");
        return "draw"
    }

    else if (playerSelection == "rock" && computerMove == 2) {
        console.log(`You win ${playerSelection} beats ${rpmHand[computerMove]}`)
        ++wins
        return "You win rock  beats scissor";
    }

    else if (playerSelection == "paper" && computerMove == 0) {
        console.log(`You win ${playerSelection} beats ${rpmHand[computerMove]}`)
        ++wins
        return "You win paper beats rock";
    }

    else if (playerSelection == "scissor" && computerMove == 1) {
        console.log(`You win ${playerSelection} beats ${rpmHand[computerMove]}`)
        ++wins

        return  "You win scissor beats paper";
    }
    //then returns the results
    ++robotWin
    console.log("You lose L")
    console.log(computerMove)
    console.log(playerSelection)

    return `You lose ${rpmHand[computerMove]} beats ${playerSelection}`;
};
//picks winner
function pickWinner(player1Wins, player2Wins) {
    //if player wins is the same as bots win then its a draw
    if (player1Wins == player2Wins) {
        console.log(robotWin);
        console.log(wins);
        console.log("Draw no one won");
        return "Draw nobody won"
    }
    //else if players wins is greater than bots player wins
    else if (player1Wins > player2Wins) {
        return "Winner winner chicken dinner You win 😎"
    }



    console.log(robotWin);
    console.log(wins);
    //else you lose
    return "You Lose TrollDespair";
}

//function plays the game
function play() {
    //then loops through x amount times
    // og val|test|increments
    //       |case|  
    for (x=0; x<5; x++) {
        //if robot wins is equal to 4 or player then stop
        if (wins == 4) {
            console.log("YOU WON");
            alert("You win PagMan");
        }

        else if (robotWin == 4) {
            console.log("YOU LOST FailFish");
            alert("You lost 🤦‍♂️");
        }
        //asks for player to input 👊 📄 ✂
        let userInput = prompt("Choose between: Rock, paper, scissor.", "").toLowerCase();
        console.log(typeof userInput)
        //calls computerPlay and checksWhoWon
        let winner = checksWhoWon(userInput, computerPlay());
        alert(winner)
       



    }
    //as the name suggests
    alert(pickWinner(wins, robotWin));
    //then resets
    wins = 0;
    robotWin = 0;
}

/*
function reset() {
    wins = 0;
    robotWin = 0;
}
*/
//function return string, string,. . ..........................................,
//      number, string;