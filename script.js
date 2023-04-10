'use strict';

console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 20;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function getValue() {
  const valueIn = Number(document.querySelector('.guess').value);
  console.log(valueIn);

  if (!valueIn) {
    displayMessage('No Number');
  } else if (valueIn) {
    if (valueIn !== secretNumber) {
      displayMessage(valueIn > secretNumber ? 'Too High hehe' : 'Too Low hehe');
      score--;
      document.querySelector('.score').textContent = score;
      if (score <= 0) {
        displayMessage('😭 You Lose');
      }
    } else if (valueIn === secretNumber) {
      displayMessage('Correct Number');
      let highscore = 0;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
  }
}

function resetGame() {
  // reset score
  score = 20;
  document.querySelector('.score').textContent = score;

  // reset secret number
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';

  // reset value
  document.querySelector('.guess').value = '';

  // reset message
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  // reset css
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
}
let buttonCheck = document.querySelector('.check');
buttonCheck.addEventListener('click', getValue);

let buttonAgain = document.querySelector('.again');
buttonAgain.addEventListener('click', resetGame);

