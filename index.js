'use strict';

// Declare the variables
let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get HTML elements
const guess = document.getElementById("inputGuess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event Listener for button click
document.querySelector('#submit').addEventListener('click', () => {
  const userValue = Number(guess.value);
  attempts++;
  // Using Conditionals
  if (userValue > 100) {
    alert(`${userValue} guess is too high! Guess a lower number`);
  } else if (userValue < 1) {
    alert(`${userValue} guess is too low! Guess a higher number`);
  } else if (userValue === randomNum) {
    hint.textContent = `${userValue} is right!`;
    submit.disabled = true;
    guess.disabled = true;

  } else if (!Number.isInteger(userValue)) {
    alert(`Input is not a number! Please guess a number`);
  } else if (userValue < randomNum) {
    hint.textContent = `${userValue} is too low! Try again.`;
  } else {
    hint.textContent = `${userValue} is too high! Try again.`;
  }
    

  guess.value = '';

  attemptsText.textContent = "Attempts: " + attempts;
});

document.querySelector('#reset').addEventListener('click', () => {
  guess.value = '';
  attempts = 0;
  attemptsText.textContent = "Attempts: " + attempts;
  randomNum = Math.floor(Math.random() * 100) + 1;
  hint.textContent = '';
  submit.disabled = false;
  guess.disabled = false;
  
});