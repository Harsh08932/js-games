'use strict';
const secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  //document.querySelector('.highscore').textContent = highscore;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number enterted';
  } else if (guess === secret) {
    document.querySelector('.message').textContent = 'yeah!!! correct guess';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secret) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too high';
    } else document.querySelector('.score').textContent = 'Game over';
  } else if (guess < secret) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too low';
    } else {
      document.querySelector('.message').textContent = 'Game over';
      document.querySelector('.score').textContent = 0;
    }
  }
});
