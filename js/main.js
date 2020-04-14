let computerTotal = 0;
let playerTotal = 0;
let roundCount = 0;

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
			let player = "rock";
			let computer = computerChooseMove();
			playRound(player, computer);
		})
		
		paper.addEventListener('click', function() {
			let player = "paper";
			let computer = computerChooseMove();
			playRound(player, computer);
		})
		
		scissors.addEventListener('click', function() {
			let player = "scissors";
			let computer = computerChooseMove();
			playRound(player, computer);
		})
}

main()

function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
		topCount.textContent = "You win! Paper beats rock.";
		playerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() == "scissors") {
		topCount.textContent = "You win! Rock beats scissors!";
		playerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() == "paper") { 
		topCount.textContent = "You win! Scissors beats paper!";
		playerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
		topCount.textContent = "You win! Paper beats rock.";
		computerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() == "scissors") {
		topCount.textContent = "You win! Rock beats scissors! ";
		computerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() == "paper") {
		topCount.textContent = "You win! Scissors beats paper!";
		computerTotal++;
		roundCount++;
		scoreUpdate();
		matchCheck();
	} else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
		topCount.textContent = "It's a tie! You both chose " + playerSelection.toLowerCase() + ".";
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
		topCount.textContent = "YOU LOSE! Computer has won the match, " + computerTotal + " points to "  + playerTotal
	} else {
		topCount.textContent = "YOU WIN! Player has won the match, " + playerTotal + " points to "  + computerTotal
	}
}

function scoreUpdate() {
	roundId.textContent = "Round: " + roundCount;
    yourScoreId.textContent = "Your Score: " +  playerTotal;
    computerScoreId.textContent = "Computer Score: " + computerTotal;
}

function matchCheck() {
	if (playerTotal === 3 || computerTotal == 3) {
		matchWinner();
		playAgain();
	}
}

function resetMatch() {
	computerTotal = 0;
    playerTotal = 0;
	roundCount = 0;
	topCount.textContent = "";
	scoreUpdate();
}

function playAgain() {
	// Create paragraph and text response asking if player wants to play again
    //const para = document.createElement("P");
	const textGame = document.createTextNode(". Do you want to play again?");
    //para.appendChild(textGame);
    document.querySelector("#top_count_id").appendChild(textGame);

    // Create 'yes' button in answer to the question 'Do you want to play again?'
    const yesButton = document.createElement("button");
    yesButton.innerHTML = "Yes";
    const body = document.querySelector(".top_count");
    body.appendChild(yesButton);

    // Create 'no' button in answer to the question 'Do you want to play again?'
    const noButton = document.createElement("button");
    noButton.innerHTML = "No";
	document.querySelector(".top_count").appendChild(noButton);
	
	yesButton.addEventListener('click', function() {
		resetMatch();
	})

	noButton.addEventListener('click', function() {
		topCount.textContent = "Thanks for playing!";
		resetMatch();
	})
}
