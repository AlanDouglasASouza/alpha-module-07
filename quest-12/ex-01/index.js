const btnEuler = document.querySelector("#btn-euler");
const btnPrimer = document.querySelector("#btn-primer");
const btnPi = document.querySelector("#btn-pi");
const resultEuler = document.querySelector("#result-euler");
const resultPrimer = document.querySelector("#result-primer");
const resultPi = document.querySelector("#result-pi");

btnEuler.addEventListener("click", () => {
  resultEuler.textContent = euler();
});

btnPrimer.addEventListener("click", () => {
  resultPrimer.textContent = "Veja o resultado no console!";

  numPrime(100000);
});

btnPi.addEventListener("click", () => {
  resultPi.textContent = "Veja o resultado no console!";
  console.log(numPi());
});

const fatorial = (num) => {
  const numFat = BigInt(num);

  if (num == 0 || num == 1) {
    return 1n;
  }

  return numFat * fatorial(num - 1);
};

// Função euler
const euler = () => {
  const num = 100;
  let result = 0;

  for (i = 0; i < num; i++) {
    result += 1 / Number(fatorial(i));
  }
  return result;
};

function numPrime(num) {
  const bigNum = BigInt(num);

  for (i = 2n; i < bigNum; i++) {
    if (prime(i)) {
      console.log(i.toString());
    }
  }

  function prime(number) {
    for (let i = 2n; i * i <= number; i++) {
      if (number % i === 0n) return false;
    }
    return true;
  }
}

const numPi = () => {
  let i = 1n;
  let x = 3n * 10n ** 1020n;
  let pi = x;
  while (x > 0) {
    x = (x * i) / ((i + 1n) * 4n);
    pi += x / (i + 2n);
    i += 2n;
  }
  return pi / 10n ** 20n;
};
