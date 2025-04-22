const playerDisplay = document.querySelector('.player-display');
const computerDisplay = document.querySelector('.computer-display');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const resultDisplay = document.querySelector('.results');

const input = document.querySelector('.input');
const containerBg = document.querySelector('.container');
const body = document.querySelector('body');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const circle = document.querySelector('.circle');

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

input.checked = JSON.parse(localStorage.getItem('mode'));

updateMode();

function updateMode() {
  if (input.checked) {
    containerBg.style.background = 'linear-gradient(40deg, rgb(238, 156, 49), rgb(105, 12, 89))';
    button1.style.background = 'radial-gradient(rgb(115, 168, 244), rgb(57, 96, 181))';
    button2.style.background = 'radial-gradient(rgb(115, 168, 244), rgb(57, 96, 181))';
    button3.style.background = 'radial-gradient(rgb(115, 168, 244), rgb(57, 96, 181))';
    button4.style.background = 'radial-gradient(rgb(115, 168, 244), rgb(57, 96, 181))';
    button5.style.background = 'radial-gradient(rgb(115, 168, 244), rgb(57, 96, 181))';
    body.style.background = 'linear-gradient(220deg, rgb(171, 160, 141), rgb(67, 66, 66))';
    circle.style.background = 'rgb(171, 160, 141)';
    resultDisplay.style.color = 'rgb(27, 41, 148)';
  } else {
    containerBg.style.background = 'linear-gradient(40deg, rgb(3, 3, 64), rgb(1, 1, 14))';
    button1.style.background = 'radial-gradient(rgb(183, 244, 126), rgb(120, 184, 68))';
    button2.style.background = 'radial-gradient(rgb(183, 244, 126), rgb(120, 184, 68))';
    button3.style.background = 'radial-gradient(rgb(183, 244, 126), rgb(120, 184, 68))';
    button4.style.background = 'radial-gradient(rgb(183, 244, 126), rgb(120, 184, 68))';
    button5.style.background = 'radial-gradient(rgb(183, 244, 126), rgb(120, 184, 68))';
    body.style.background = 'linear-gradient(220deg, rgb(141, 141, 171), rgb(67, 66, 66))';
    circle.style.background = 'rgb(141, 141, 171)';
    resultDisplay.style.color = 'rgb(183, 244, 126)';
  }
}

input.addEventListener('input', () => {
  updateMode();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem('mode', JSON.stringify(input.checked));
}
