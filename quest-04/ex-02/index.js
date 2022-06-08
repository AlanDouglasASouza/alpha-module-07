const min = document.querySelector("#min");
const max = document.querySelector("#max");
const btn = document.querySelector("#btn-sort");
const titleResult = document.querySelector("#result-title");
const textImc = document.querySelector("#text-imc");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validation()) {
    return;
  }
  draw(parseInt(min.value), parseInt(max.value));
});

const validation = () => {
  if (isNaN(min.value) || isNaN(max.value)) {
    alert("Por favor digite somente números inteiros nos campos!");
    return false;
  }
  if (parseInt(min.value) > parseInt(max.value)) {
    alert("O número mínimo deve ser menor que o número maximo.");
    return false;
  }
  return true;
};

const draw = (min, max) => {
  let drawfirst = Math.random() * max;
  while (drawfirst < min) {
    drawfirst = Math.random() * max;
  }
  titleResult.textContent = parseInt(drawfirst);
};
