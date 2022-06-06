const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const genre = document.getElementsByName("genre");
const btn = document.querySelector("#btn-check");
const divConclusion = document.querySelector("#conclusion");

btn.onclick = () => {
  if (!notNull()) {
    return;
  }
  if (!validationData()) {
    return;
  }
  calcDayDead();
};

const totalLive = () => {
  const liveMen = 2305281600000; // 73,1 anos em milisegundos
  const liveWomen = 2526033600000; // 80,1 anos em milisegundos
  if (radio(genre)[0] == "women") {
    return liveWomen;
  } else {
    return liveMen;
  }
};

const calcDayDead = () => {
  const birthDay = new Date(`${month.value}-${day.value}-${year.value}`);
  const time = new Date().getTime() - birthDay.getTime();
  const timeLive = totalLive() - time;
  const restTime = timeLive / 86400000; // Valor para dividir milisegundos em dias

  if (birthDay.getTime() > new Date().getTime()) {
    alert("Preencha uma data inferior a atual.");
    return;
  }

  if (restTime < 1) {
    divConclusion.style = "display: flex";
    divConclusion.textContent = `Você é zumbi! Já passou da espectativa de vida.`;
    return;
  }

  divConclusion.style = "display: flex";
  divConclusion.textContent = `Você tem mais ${parseInt(
    restTime
  )} dias de vida!`;
};

const radio = (elements) => {
  const result = [];
  for (option of elements) {
    if (option.checked) {
      result.push(option.value);
    }
  }
  return result;
};

const notNull = () => {
  if (!day.value || !month.value || !year.value || radio(genre) == "") {
    alert("Preencha todos os campos antes de continuar!");
    return false;
  }
  return true;
};

const validationData = () => {
  if (day.value < 1 || day.value > 31) {
    alert("O mês pode conter somente até 31 dias. Por favor corrija o valor.");
    day.style = "border: 1px solid red";
    return false;
  } else {
    day.style = "border: none";
  }
  if (month.value < 1 || month.value > 12) {
    alert("O ano pode conter somente até 12 meses. Por favor corrija o valor.");
    month.style = "border: 1px solid red";
    return false;
  } else {
    month.style = "border: none";
  }
  if (year.value.length != 4) {
    alert("O ano de conter 4 dígitos. Por favor corrija o valor.");
    year.style = "border: 1px solid red";
    return false;
  } else {
    year.style = "border: none";
  }

  return true;
};
