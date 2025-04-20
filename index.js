const playerDisplay = document.querySelector('.player-display');
const computerDisplay = document.querySelector('.computer-display');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const resultDisplay = document.querySelector('.results');

let playerScoreNum = '0';
let computerScoreNum = '0';

const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

function game(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 5)];

  const getResult = (playerChoice, computerChoice) => 
    
    playerChoice === computerChoice ? "It's a tie!" :
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') || 
    (playerChoice === 'Rock' && computerChoice === 'Lizard') || 
    (playerChoice === 'Lizard' && computerChoice === 'Spock') || 
    (playerChoice === 'Spock' && computerChoice === 'Scissors') || 
    (playerChoice === 'Scissors' && computerChoice === 'Lizard') || 
    (playerChoice === 'Lizard' && computerChoice === 'Paper') || 
    (playerChoice === 'Paper' && computerChoice === 'Spock') || 
    (playerChoice === 'Spock' && computerChoice === 'Rock') || 
    (playerChoice === 'Rock' && computerChoice === 'Scissors') 
    ? "You win! Live long and prosper..." : "You lose...";
  
  const result = getResult(playerChoice, computerChoice);
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  if (result === "You win! Live long and prosper...") {
    playerScoreNum++;
  } else if (result === "You lose...") {
    computerScoreNum++;
  }

  playerScore.textContent = `${playerScoreNum}`;
  computerScore.textContent = `${computerScoreNum}`;
}