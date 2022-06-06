const firstNumber = document.querySelector("#operating");
const secundNumber = document.querySelector("#operator");
const btnCalc = document.querySelector("#btn-calc");
const form = document.querySelector("#form-calc");
const textResult = document.querySelector("#text-result");
const result = document.querySelector("#value-result");

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validation()) {
    return;
  }
  operations(form.operation.value);
});

const operations = (operation) => {
  const numberOne = parseFloat(firstNumber.value);
  const numberTwo = parseFloat(secundNumber.value);

  switch (operation) {
    case "addition":
      console.log(`O resultado da soma é ${numberOne + numberTwo}`);
      textResult.textContent = "O resultado da soma é:";
      result.textContent = numberOne + numberTwo;
      break;
    case "subtraction":
      console.log(`O resultado da subtração é ${numberOne - numberTwo}`);
      textResult.textContent = "O resultado da subtração é:";
      result.textContent = numberOne - numberTwo;
      break;
    case "multiplication":
      console.log(`O resultado da multiplicação é ${numberOne * numberTwo}`);
      textResult.textContent = "O resultado da multiplicação é:";
      result.textContent = numberOne * numberTwo;
      break;
    case "division":
      console.log(`O resultado da divisão é ${numberOne / numberTwo}`);
      textResult.textContent = "O resultado da divisão é:";
      result.textContent = numberOne / numberTwo;
      break;
    default:
      alert("Selecione a operação matemática que deseja fazer!");
  }
};

const validation = () => {
  if (!firstNumber.value || !secundNumber.value) {
    alert("Preencha todos os campos!");
    return false;
  }
  return true;
};
