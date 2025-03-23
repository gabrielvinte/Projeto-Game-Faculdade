const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultMessage = document.getElementById('result-message');

let randomNumber = Math.floor(Math.random() * 15) + 1; // Gera o número inicialmente

guessButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);

  if (userGuess === randomNumber) {
    resultMessage.textContent = '🎉 Parabéns, você acertou o número!';
  } else {
    resultMessage.textContent = `❌ Errou! O número era ${randomNumber}. Tente novamente!`;
  }

  // Reseta o número ao clicar no botão de "Enviar"
  randomNumber = Math.floor(Math.random() * 15) + 1;

  // Exibe a mensagem com transição suave
  resultMessage.classList.add('show');
});
