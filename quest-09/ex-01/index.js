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

console.log(sum(916, 19));
