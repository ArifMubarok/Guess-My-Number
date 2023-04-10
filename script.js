'use strict';

/*
///////////////////////////////////////
// Selecting and Manipulating Element
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

///////////////////////////////////////
// document.querySelector('.check');

console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);

let score = 20;

// let highscore = document.querySelector('.highscore').textContent;
// console.log(highscore);

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function getValue() {
  // let message = document.querySelector('.message');
  const valueIn = Number(document.querySelector('.guess').value);
  console.log(valueIn);

  if (!valueIn) {
    // message.textContent = 'No Number';
    displayMessage('No Number');
    // document.querySelector('.message').textContent = 'No Number';
  } else if (valueIn) {
    // if guess is wrong
    if (valueIn !== secretNumber) {
      // document.querySelector('.message').textContent =
      //   valueIn > secretNumber ? 'Too High hehe' : 'Too Low hehe';
      displayMessage(valueIn > secretNumber ? 'Too High hehe' : 'Too Low hehe');
      score--;
      document.querySelector('.score').textContent = score;
      if (score <= 0) {
        // document.querySelector('.message').textContent = '😭 You Lose';
        displayMessage('😭 You Lose');
      }
    } else if (valueIn === secretNumber) {
      // if guess is correct
      // message.textContent = 'Correct Number';
      displayMessage('Correct Number');
      // document.querySelector('.message').textContent = 'Correct Number';
      let highscore = 0;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
    // if (valueIn > secretNumber) {
    //   document.querySelector('.message').textContent = 'Too High hehe';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    //   if (score <= 0) {
    //     document.querySelector('.message').textContent = '😭 You Lose';
    //   }
    // } else if (valueIn < secretNumber) {
    //   document.querySelector('.message').textContent = 'Too Low hehe';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    //   if (score <= 0) {
    //     document.querySelector('.message').textContent = '😭 You Lose';
    //   }
    // } else if (valueIn === secretNumber) {
    //   document.querySelector('.message').textContent = 'Correct Number';
    //   let highscore = document.querySelector('.highscore').textContent;
    //   if (score > highscore) {
    //     highscore = score;
    //     document.querySelector('.highscore').textContent = score;
    //   }

    //   document.querySelector('.number').textContent = secretNumber;

    //   document.querySelector('.number').style.width = '30rem';
    //   document.querySelector('body').style.backgroundColor = '#60b347';
    // }
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

// console.log(value);
