const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const btnImc = document.querySelector("#btn-imc");
const titleImc = document.querySelector("#imc");
const textImc = document.querySelector("#text-imc");

btnImc.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validation()) {
    return;
  }
  imc(parseFloat(weight.value), parseFloat(height.value));
});

const validation = () => {
  if (isNaN(weight.value) || isNaN(height.value)) {
    alert("Por favor digite somente números nos campos!");
    return false;
  }
  return true;
};

const imc = (w, h) => {
  const result = w / (h * h);
  titleImc.textContent = `O seu IMC é de ${result.toFixed(2)}`;
  if (result >= 30) {
    textImc.textContent = "Obsidade! Cuidado cuide de sua saúde!";
  } else if (result >= 25) {
    textImc.textContent = "Acima do Peso! Se cuide...";
  } else if (result < 25 && result >= 18.5) {
    textImc.textContent = "Peso normal!";
  } else {
    textImc.textContent = "Abaixo do Peso!";
  }
};
