const elements = document.querySelectorAll(".elemento");
const divResult = document.querySelector(".result");
const btn = document.querySelector("button");
const matrix = new Array();
let response = "X";
let count = 0;

btn.addEventListener("click", restart);

for (i = 0; i < elements.length; i++) {
  elements[i].onclick = (e) => {
    playOn(e);
  };
}

for (i = 0; i < 3; i++) {
  matrix[i] = ["00" + i, "11" + i, "22" + i];
}

function playOn(e) {
  const data = e.target.dataset.element1;

  e.target.textContent = response;
  matrix[Number(data[0]) - 1][Number(data[1]) - 1] = response;

  e.target.style = "pointer-events: none;";

  if (lineCombination() || collumnCombination() || diagonalCombination()) {
    divResult.style.display = "flex";
    document.querySelector(".box").style = "pointer-events: none;";
    document.querySelector(
      ".result h1"
    ).innerHTML = `<span>${response}</span></br> Foi o Ganhador!!`;
    return;
  }
  if (count == 8) {
    divResult.style.display = "flex";
    document.querySelector(".box").style = "pointer-events: none;";
    document.querySelector(".result h1").textContent = `Deu Velha!!`;
  }

  response = response === "O" ? "X" : "O";
  count++;
}

function lineCombination() {
  let result = true;
  for (i = 0; i < 3; i++) {
    result = true;
    matrix[i].forEach((el) => {
      if (el != matrix[i][0]) {
        result = false;
      }
    });
    if (result == true) {
      return result;
    }
  }
  return result;
}

function collumnCombination() {
  if (
    (matrix[0][0] == matrix[1][0] && matrix[0][0] == matrix[2][0]) ||
    (matrix[0][1] == matrix[1][1] && matrix[0][1] == matrix[2][1]) ||
    (matrix[0][2] == matrix[1][2] && matrix[0][2] == matrix[2][2])
  ) {
    return true;
  }
  return false;
}

function diagonalCombination() {
  if (
    (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) ||
    (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0])
  ) {
    return true;
  }
  return false;
}

function restart() {
  document.location.reload(true);
}
