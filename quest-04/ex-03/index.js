const numFloat = document.querySelector("#number-float");

const btn = document.querySelector("#btn-ver");
const resultMin = document.querySelector("#result-min");
const resultMax = document.querySelector("#result-max");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validation()) {
    return;
  }
  min();
  max();
});

const validation = () => {
  if (isNaN(numFloat.value)) {
    alert("Erro: Por favor digite somente números!");
    return false;
  }
  return true;
};

const min = () => {
  const floor = Math.floor(numFloat.value);
  resultMin.textContent = `O número minimo inteiro mais próximo é ${floor}.`;
};

const max = () => {
  const ceil = Math.ceil(numFloat.value);
  resultMax.textContent = `O número máximo inteiro mais próximo é ${ceil}.`;
};
