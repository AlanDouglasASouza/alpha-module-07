const btn = document.querySelector("#btn-sort");
const resultTitle = document.querySelector("#result-title");
const resultOld = document.querySelector("#result-old");

btn.addEventListener("click", () => {
  const draw = Math.random() * 100;

  const gener = draw < 48.3 ? "male" : "female";

  const old = Math.random() * 100;

  if (gener === "male") {
    resultTitle.textContent = "A pessoa sorteada é um Homem.";
    if (old > 16.7) {
      resultOld.textContent = "Não é idoso.";
    } else {
      resultOld.textContent = "É idoso.";
    }
  }

  if (gener === "female") {
    resultTitle.textContent = "A pessoa sorteada é uma Mulher.";
    if (old > 16.7) {
      resultOld.textContent = "Não é idosa.";
    } else {
      resultOld.textContent = "É idosa.";
    }
  }
});
