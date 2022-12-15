'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 3;
// document.querySelector('.score').textContent = 4;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// console.log(secretNumber);

// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('💩 Need a number!');
    // win
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('😎 Correct Answer !');
    displayColor('#60b347');

    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
    //  not the same
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🥵 Too High' : '🥶 Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You Lost The Game 🤡');
      displayScore(score);
      displayColor('red');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start Guessin ...');
  document.querySelector('.guess').value = '';
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayNumber('?');
  // console.log(secretNumber);
  displayColor('#222');
});
