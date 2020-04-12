let computerTotal = 0;
let playerTotal = 0;
let roundCount = 0;
		
function playRound(playerSelection, computerSelection) {
			if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
				console.log("Player wins! Paper beats rock.");
				playerTotal++;
				roundCount++;
				scoreUpdate();
			} else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() == "scissors") {
				console.log("Player wins! Rock beats scissors! ");
				playerTotal++;
				roundCount++;
				scoreUpdate();
			} else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() == "paper") {
				console.log("Player wins! Scissors beats paper!"); 
				playerTotal++;
				roundCount++;
				scoreUpdate();
			} else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
				console.log("Computer wins! Paper beats rock.");
				computerTotal++;
				roundCount++;
				scoreUpdate();
			} else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() == "scissors") {
				console.log("Computer wins! Rock beats scissors! ");
				computerTotal++;
				roundCount++;
				scoreUpdate();
			} else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() == "paper") {
				console.log("Computer wins! Scissors beats paper!"); 
				computerTotal++;
				roundCount++;
				scoreUpdate();
			} else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
				console.log("It's a tie! You both chose " + playerSelection.toLowerCase() + ".");
				roundCount++;
				scoreUpdate();
			} else {
				console.log("That's not a valid move! ");
				roundCount++;
				scoreUpdate();
			}
		}

function playerChooseMove() {
			let player = prompt("Player, what is your move? ");
			return player;
		}
		
function computerChooseMove() {
			let moves = ["scissors", "paper", "rock"];
			let computerMove = moves[Math.floor(Math.random() * moves.length)];
			return computerMove;
		}

function matchWinner() {
			if (computerTotal > playerTotal) {
				console.log("Computer has won the match, " + computerTotal + " points to "  + playerTotal)
			} else {
				console.log("Player has won the match, " + playerTotal + " points to "  + computerTotal)
			}

		}

function scoreUpdate() {
			console.log("Computer: " + computerTotal + ", Player: " + playerTotal + ", Round: " + roundCount);
		}

function playAgain() {
			let again = prompt("Do you want to play again? ('yes' or 'no')");
		    if (again.toLowerCase() === "yes") {
		    	computerTotal = 0;
		        playerTotal = 0;
		        roundCount = 0;
		    	main();
		    } else {
		    	gameOver();
		    }
		}

function gameOver() {
			console.log("Thanks for playing! ");
		}

function main() {
			console.log("Welcome to Scissors, Paper, Rock! The first person to win 3 rounds wins the Match. Let's begin! ")
			while (!(playerTotal === 3 || computerTotal == 3)) {
				playRound(playerChooseMove(), computerChooseMove());
			} 
			matchWinner();
			playAgain();
        }