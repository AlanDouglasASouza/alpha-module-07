const firstNumber = document.querySelector("#operating");
const secundNumber = document.querySelector("#operator");
const btnCalc = document.querySelector("#btn-calc");
const form = document.querySelector("#form-calc");
const textResult = document.querySelector("#text-result");
const result = document.querySelector("#value-result");

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();
  operations(form.operation.value);
});

const operations = (operation) => {
  const numberOne = parseInt(firstNumber.value);
  const numberTwo = parseInt(secundNumber.value);

  switch (operation) {
    case "addition":
      result.textContent = sum(numberOne, numberTwo);
      break;
    case "subtraction":
      result.textContent = subtract(numberOne, numberTwo);
      break;
    case "multiplication":
      result.textContent = multiply(numberOne, numberTwo);
      break;
    case "division":
      result.textContent = divide(numberOne, numberTwo);
      break;
    case "potentation":
      result.textContent = potentiation(numberOne, numberTwo);
      break;
    default:
      alert("Select the math operation you want to do!");
  }
};

function sum(num1, num2) {
  let result;
  try {
    if (
      isNaN(num1) ||
      isNaN(num2) ||
      !Number.isInteger(parseFloat(num1)) ||
      !Number.isInteger(parseFloat(num2)) ||
      num1 < 0 ||
      num2 < 0
    ) {
      throw `[sum] Impossible to sum ${num1} + ${num2}`;
    }
  } catch (e) {
    return e;
  }

  result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  let result = 0;

  try {
    if (typeof sum(num1, num2) === "string" || num1 < num2)
      throw `[subtract] Impossible to subtract ${num1} - ${num2}`;
  } catch (e) {
    return (result = e);
  }

  sub(num1, num2);
  function sub(number1, number2) {
    let cont = sum(number2, 1);

    if (cont > number1) {
      return;
    }

    result = sum(result, 1);
    sub(number1, cont);
    return result;
  }
  return result;
}

function multiply(num1, num2) {
  let result = 0;
  try {
    if (typeof sum(num1, num2) === "string")
      throw `[multiply] Impossible to multiply ${num1} * ${num2}`;
  } catch (e) {
    return (result = e);
  }

  mult(num1, num2);

  function mult(number1, number2) {
    let multiplier = number1;
    if (multiplier === 0) {
      return;
    }
    result = sum(result, number2);
    mult(subtract(number1, 1), number2);
    return result;
  }
  return result;
}

function potentiation(num1, num2) {
  let result = num1;
  let cont = num2;
  try {
    if (typeof sum(num1, num2) === "string" || (num1 == 0 && num2 == 0))
      throw `[multiply] Impossible to multiply ${num1} * ${num2}`;
  } catch (e) {
    return (result = e);
  }

  if (num2 == 0) {
    return 1;
  }
  if (num1 == 0) {
    return 0;
  }

  expo(num1, num2);

  function expo(number1) {
    if (cont === 1) {
      return;
    }
    cont = subtract(cont, 1);
    result = multiply(result, number1);
    expo(number1);
  }
  return result;
}

function divide(num1, num2) {
  let result = 0;

  try {
    if (typeof sum(num1, num2) === "string")
      throw `[divide] Impossible to divide ${num1} / ${num2}`;
    if (num2 === 0) throw `[divide] Division by zero`;
  } catch (e) {
    return (result = e);
  }

  division(num1, num2);

  function division(number1, number2) {
    result = sum(result, 1);

    if (multiply(result, number2) > number1) {
      result = subtract(result, 1);
      return;
    }

    division(number1, number2);
  }
  return result;
}
