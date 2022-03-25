
buttons = document.querySelectorAll("button");
buttons.forEach(
    button => {this.addEventListener("click", play);
});


//stores players wins and bots
let wins = 0;
let robotWin = 0;
let rpmHand = {0:"rock", 1:"paper", 2:"scissor", "rock":"🪨", "paper":"📑", "scissor":"✂️"};
let rpmHandTwo = ["🪨", "📑", "✂️"];
//function draws random number between 0-2
function computerPlay() {
    console.log("inside computerPlay")
    return Math.floor(Math.random() * 3)

}
//display the hand on screen
function displayHand(leftHand, rightHand) {
    let left = document.querySelector(".left");
    let right = document.querySelector(".right");
    console.log(leftHand);
    left.textContent = rpmHand[leftHand];
    right.textContent = rpmHandTwo[rightHand];
}

//checks who won
let checksWhoWon = function(playerSelection, computerMove) {

    displayHand(playerSelection, computerMove);

    console.log("am i a global func or local func 🤔")
    //compares the random number the computer chose
    if (playerSelection == rpmHand[computerMove]) {
        document.getElementById('winner').textContent = "Draw";
        console.log("draw");
        return "draw"
    }

    else if (playerSelection == "rock" && computerMove == 2) {
        console.log(`You win ${playerSelection} beats ${rpmHand[computerMove]}`)
        ++wins
        whoWon = "You win rock 🤨 beats scissor";

        document.getElementById('winner').textContent = whoWon

        return whoWon;
    }

    else if (playerSelection == "paper" && computerMove == 0) {
        console.log(`You win ${playerSelection} beats ${rpmHand[computerMove]}`)
        ++wins
        whoWon = "You win paper beats rock 🤨";

        document.getElementById('winner').textContent = whoWon

        return whoWon;
    }

    else if (playerSelection == "scissor" && computerMove == 1) {
        console.log(`You win ${playerSelection} beats ${rpmHand[computerMove]}`)
        ++wins
        whoWon = "You win scissor beats paper";
        document.getElementById('winner').textContent = whoWon

        return whoWon;
    }
    //then returns the results
    ++robotWin
    
    whoWon = `You lose ${rpmHand[computerMove]} beats ${playerSelection}`;
    
    document.getElementById('winner').textContent = whoWon
    return whoWon;
    
};
//picks winner
function pickWinner(player1Wins, player2Wins) {
    //if player wins is the same as bots win then its a draw
    if (player1Wins < player2Wins) {
        
        return "Robot Wins"
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

//change score
function updateScore(wins, robotWins) {
    //select the score node
    let humanScore = document.querySelector(".humanScore");
    let robotScore = document.querySelector(".robotScore");

    

    //give elemenet new value
    humanScore.textContent = wins;
    robotScore.textContent = robotWins;

}

//function plays the game
function play(userHand) {
    let anounceWinner = document.querySelector(".actualWinner");
    //clear winner text
    anounceWinner.textContent = "";
    let score = document.querySelector(".score");

    //figure out what button user pressed
    let userPick = userHand.target.attributes[1].nodeValue;
    
    //calls computerPlay and checksWhoWon
    let winner = checksWhoWon(userPick, computerPlay());

       
    //update score 
    updateScore(wins, robotWin);

    //if robot wins is equal to 5 or player then stop
    if (wins == 5 || robotWin == 5) {
        
        anounceWinner.innerText = pickWinner(wins, robotWin);
        //alert("You win PagMan");
        wins = 0;
        robotWin = 0;
    }
}