let computerTotal = 0;
let playerTotal = 0;
let roundCount = 0;

//const rock = document.querySelector('#rock_id');
//rock.onclick = () => alert("You clicked rock! "); 
//console.dir(document.all);

// We want to create variables for all the objects we need to manipulate on the page.
const rock = document.querySelector('#rock_id');
const paper = document.querySelector('#paper_id');
const scissors = document.querySelector('#scissors_id');
const roundId = document.querySelector('#round_id');
const yourScoreId = document.querySelector('#your_score_id');
const computerScoreId = document.querySelector('#computer_score_id');
const topCount = document.querySelector('#top_count_id');

function main() {
		rock.addEventListener('click', function() {
			//while (!(playerTotal === 3 || computerTotal == 3)) {
			let player = "rock";
			let computer = computerChooseMove();
			playRound(player, computer);
		})
		
		paper.addEventListener('click', function() {
			//while (!(playerTotal === 3 || computerTotal == 3)) {
			let player = "paper";
			let computer = computerChooseMove();
			playRound(player, computer);
		})
		
		scissors.addEventListener('click', function() {
			//while (!(playerTotal === 3 || computerTotal == 3)) {
			let player = "scissors";
			let computer = computerChooseMove();
			playRound(player, computer);
		})
}

main()

// roundId.innerText = "";
// roundId.innerHTML = "<h3>Hello</h3>";
// roundId.style.borderBottom = 'solid 3px #000";
// roundId.style.color = "red";
// .style.backgroundColor = "#f4f4f4";

function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
		//console.log("You win! Paper beats rock.");
		topCount.textContent = "You win! Paper beats rock.";
		playerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() == "scissors") {
		//console.log("You win! Rock beats scissors! ");
		topCount.textContent = "You win! Rock beats scissors!";
		playerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() == "paper") {
		//console.log("You win! Scissors beats paper!"); 
		topCount.textContent = "You win! Scissors beats paper!";
		playerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
		//console.log("You win! Paper beats rock.");
		topCount.textContent = "You win! Paper beats rock.";
		computerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() == "scissors") {
		//console.log("You win! Rock beats scissors! ");
		topCount.textContent = "You win! Rock beats scissors! ";
		computerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() == "paper") {
		//console.log("You win! Scissors beats paper!"); 
		topCount.textContent = "You win! Scissors beats paper!";
		computerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
		//console.log("It's a tie! You both chose " + playerSelection.toLowerCase() + ".");
		topCount.textContent = "It's a tie! You both chose " + playerSelection.toLowerCase() + ".";
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else {
		console.log("That's not a valid move! ");
		roundCount++;
		scoreUpdate();
		matchCheck();
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
		//console.log("Computer has won the match, " + computerTotal + " points to "  + playerTotal);
		topCount.textContent = "YOU LOSE! Computer has won the match, " + computerTotal + " points to "  + playerTotal
	} else {
		//console.log("Player has won the match, " + playerTotal + " points to "  + computerTotal);
		topCount.textContent = "YOU WIN! Player has won the match, " + playerTotal + " points to "  + computerTotal
	}
}

function scoreUpdate() {
	//console.log("Computer: " + computerTotal + ", Player: " + playerTotal + ", Round: " + roundCount);
	roundId.textContent = "Round: " + roundCount;
    yourScoreId.textContent = "Your Score: " +  playerTotal;
    computerScoreId.textContent = "Computer Score: " + computerTotal;
}

function matchCheck() {
	if (playerTotal === 3 || computerTotal == 3) {
		matchWinner();
		//playAgain();
	}
}


// function playAgain() {
// 	let again = prompt("Do you want to play again? ('yes' or 'no')");
// 	if (again.toLowerCase() === "yes") {
// 		computerTotal = 0;
// 		playerTotal = 0;
// 		roundCount = 0;
// 		main();
// 	} else {
// 		gameOver();
// 	}
// }

// function gameOver() {
// 	console.log("Thanks for playing! ");
// }

// function main() {
// 	//console.log("Welcome to Scissors, Paper, Rock! The first person to win 3 rounds wins the Match. Let's begin! ");
// 	while (!(playerTotal === 3 || computerTotal == 3)) {
// 		playRound(playerChooseMove(), computerChooseMove());
// 	} 
// 	matchWinner();
// 	playAgain();
// }

