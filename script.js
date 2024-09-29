
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const submitButton = document.getElementById('submit');
const guessInput = document.getElementById('guess');
const messageDisplay = document.getElementById('message');
const restartButton = document.getElementById('restart');

submitButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        messageDisplay.textContent = `Congratulations! You guessed it in ${attempts} attempts! 🎉`;
        submitButton.style.display = 'none';
        restartButton.style.display = 'block';
    } else if (userGuess < randomNumber) {
        messageDisplay.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        messageDisplay.textContent = 'Too high! Try again.';
    }

    guessInput.value = '';
    guessInput.focus();
});

restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    messageDisplay.textContent = '';
    guessInput.value = '';
    guessInput.focus();
    submitButton.style.display = 'inline';
    restartButton.style.display = 'none';
});
