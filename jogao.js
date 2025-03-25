const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultMessage = document.getElementById('result-message');

let randomNumber = Math.floor(Math.random() * 15) + 1; 

guessButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);

  if (userGuess === randomNumber) {
    resultMessage.textContent = '🎉 Parabéns, você acertou o número!';
  } else {
    resultMessage.textContent = `❌ Errou! O número era ${randomNumber}. Tente novamente!`;
  }

  randomNumber = Math.floor(Math.random() * 15) + 1;

  resultMessage.classList.add('show');
});
