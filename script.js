
//This resests the game for each round
function reset(){ 
let  computerPick = "null";}
   

//Random choice gen 
function getComputerChoice() {
    computerPick = choices [Math.floor(Math.random()*choices.length)];
    console.log();   
    }

 //Sets Off The Scoring
 let playerScore = 0;
 let computerScore = 0;


//These are the choices for the game
let choices = ['Heads', 'Tails'];

//This  should pull choices from index.html file lines 25ish, 26ish, 27ish
function selectHeads() {
playerChoice = "Heads";}

function selectTails(){ 
playerChoice = "Tails";}


//This pulls the Player and CPU selections, compares them and sends results to console
function playGame(){
    getComputerChoice(); 

//Winner Winner Chicken Dinner
if (playerChoice == "Heads" && computerPick == "Heads" || playerChoice == "Tails" && computerPick == "Tails")    
playerWins();reset();


//Snake eyes!
 if (playerChoice == "Heads" && computerPick == "Tails" || playerChoice == "Tails" && computerPick == "Heads")  
    cpuWins(); reset();

 //So close yet so far 
if (playerChoice == "Heads" && computerPick == "Heads" || playerChoice == "Tails" && computerPick == "Tails")  
tieGame();reset();
     
}


//This is the adds points for the player and outputs results to consol
function playerWins() {
    (playerScore = playerScore+1); 
    console.log("Player picks" + " " + playerChoice + ". " + "CPU picks" + " " + computerPick + ". "+ "You Win!");
    console.log(playerScore);

    //This triggers a win for player
     if (playerScore == 5)
    return replayWinner()}
    

 //This is the adds points for the CPU and outputs results to consol   
function cpuWins() {
    (computerScore= computerScore+1);  
    console.log("Player picks" + " " + playerChoice + ". " + "CPU picks" + " " + computerPick + ". " + "You Lose!");
    console.log(computerScore);

//This triggers a win for CPU
    if (computerScore == 5) 
    return replayLoser()}
    
   function tieGame () {
console.log ("Player picks" + " " + playerChoice + ". " + "CPU picks" + " " + computerPick + ". "+ "It's A Tie!!");
}


//This resets on a win
  function replayWinner(){	 
    if (confirm("You Win! Play Again??") == true) {
      playerScore = 0; computerScore = 0;
    } else {
       alert ("Game Over!!");
    }
  }

//This resets on a loss
  function replayLoser(){	 
    if (confirm("You Lose! Play Again??") == true) {
      playerScore = 0; computerScore = 0;
    } else {
       alert ("Game Over!!");
    }
  }







