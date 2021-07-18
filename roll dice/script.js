'use strict';
//
let state = true;
// selecting elements
const switchPlayer = function () {
  document.getElementById(`current--${active}`).textContent = 0;
  scores[active] += score;
  active = active === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
//
let score = 0;
let active = 0;
const scores = [0, 0];
const curr0 = document.getElementById('current--0');
const curr1 = document.getElementById('current--1');
//
const score0 = document.querySelector('#score--0');
score0.textContent = '0';
const score1 = document.querySelector('#score--1');
score1.textContent = '0';
const diceel = document.querySelector('.dice');
diceel.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (state) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;
    if (dice !== 1) {
      score += dice;
      document.getElementById(`current--${active}`).textContent = score;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (state) {
    scores[active] += score;
    document.getElementById(`score--${active}`).textContent = scores[active];
    score = 0;
    //
    if (scores[active] >= 50) {
      state = false;
      diceel.classList.add('hidden');
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active}`)
        .classList.remove(`player--active`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  curr0.textContent = 0;
  curr1.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  diceel.classList.add('hidden');
  state = true;
  player0.classList.add('player--active');
  player0.classList.remove('player--active');
  scores = [0, 0];
  score = 0;
  active = 0;
});
