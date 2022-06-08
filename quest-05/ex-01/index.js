const numIpt = document.querySelector("#number-input");
const btn = document.querySelector("#btn-ver");
const resultText = document.querySelector("#result-text");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  wordNumber(parseInt(numIpt.value));
});

const wordNumber = (number) => {
  switch (number) {
    case 1:
      resultText.textContent = "Esse número se escreve: 'UM'";
      break;
    case 2:
      resultText.textContent = "Esse número se escreve: 'DOIS'";
      break;
    case 3:
      resultText.textContent = "Esse número se escreve: 'TRÊS'";
      break;
    case 4:
      resultText.textContent = "Esse número se escreve: 'QUATRO'";
      break;
    case 5:
      resultText.textContent = "Esse número se escreve: 'CINCO'";
      break;
    case 6:
      resultText.textContent = "Esse número se escreve: 'SEIS'";
      break;
    case 7:
      resultText.textContent = "Esse número se escreve: 'SETE'";
      break;
    case 8:
      resultText.textContent = "Esse número se escreve: 'OITO'";
      break;
    case 9:
      resultText.textContent = "Esse número se escreve: 'NOVE'";
      break;
    case 10:
      resultText.textContent = "Esse número se escreve: 'DEZ'";
      break;
    default:
      alert("Por favor digite somente números inteiro de 1 a 10!");
  }
};
