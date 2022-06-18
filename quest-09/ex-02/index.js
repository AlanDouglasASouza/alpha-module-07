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

console.log(subtract(1050, 258));
