const numberOne = document.querySelector("#first-number");
const numbertwo = document.querySelector("#secund-number");
const btnCompare = document.querySelector("#btn-compare");
const divResult = document.querySelector("#result");

btnCompare.onclick = (e) => {
  if (!numberOne.value || !numbertwo.value) {
    alert("Por favor, escolha os dois números que deseja comparar.");
    return;
  }
  if (numberOne.value > numbertwo.value) {
    divResult.style = "display: flex";
    divResult.innerHTML = "O primeiro número é o maior!";
  } else if (numberOne.value < numbertwo.value) {
    divResult.style = "display: flex";
    divResult.innerHTML = "O primeiro número é o menor!";
  } else {
    divResult.style = "display: flex";
    divResult.innerHTML = "Os números são iguais!";
  }
  e.preventDefault();
};
