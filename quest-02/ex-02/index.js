const inputOne = document.getElementById("first-string");
const inputTwo = document.getElementById("secund-string");
const btn = document.getElementById("btn-compare");
const divResl = document.getElementById("text-result");
const test = document.getElementById("result");

btn.onclick = () => {
  if (!inputOne.value || !inputTwo.value) {
    alert("Preencha os dois campos antes de comparar!");
    return;
  }
  if (inputOne.value.length > inputTwo.value.length) {
    divResl.innerHTML = "O primeiro texto é o maior!";
  } else if (inputOne.value.length < inputTwo.value.length) {
    divResl.textContent = "O primeiro texto é o menor!";
  } else {
    divResl.textContent = "Os textos tem a mesma quantidade de caracteres!";
  }
  return false;
};
