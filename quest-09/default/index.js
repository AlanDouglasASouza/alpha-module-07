// Função de soma
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

//console.log(sum(916, 19));

// Função de subtração (usando somente a soma)
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

//console.log(subtract(1050, 258));

// Função de multiplicação (usando somente a soma e a subtração)
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

//console.log(multiply(100, 18));

// Função de potenciação (usando somente a soma, subtração e multiplicação)
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

//console.log(potentiation(5, 4));

// Função de divisão (usando somente a soma, subtração e nulplicação)
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

//console.log(divide(100, 3));
