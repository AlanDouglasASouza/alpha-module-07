const numIpt = document.querySelector("#number-input");
const btn = document.querySelector("#btn-ver");
const resultDay = document.querySelector("#result-day");
const resultMonth = document.querySelector("#result-month");
const resultYear = document.querySelector("#result-year");
const resultWeek = document.querySelector("#result-week");
const resultMonthPt = document.querySelector("#result-month-pt");
const resultTime = document.querySelector("#result-time");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  dateDescription(numIpt.value);
});

const dateDescription = (date) => {
  const dateNew = new Date(`${date} `);

  resultDay.textContent = `Dia: ${dateNew.getDate()}`;
  resultMonth.textContent = `Mês: ${dateNew.getMonth() + 1}`;
  resultYear.textContent = `Ano: ${dateNew.getFullYear()}`;
  resultTime.textContent = `Em milisegundos: ${dateNew.getTime()}`;

  weekDay(dateNew);
  monthDay(dateNew);
};

const weekDay = (date) => {
  switch (date.getDay()) {
    case 0:
      resultWeek.textContent = "Dia da semana: DOMINGO";
      break;
    case 1:
      resultWeek.textContent = "Dia da semana: SEGUNDA";
      break;
    case 2:
      resultWeek.textContent = "Dia da semana: TERÇA";
      break;
    case 3:
      resultWeek.textContent = "Dia da semana: QUARTA";
      break;
    case 4:
      resultWeek.textContent = "Dia da semana: QUINTA";
      break;
    case 5:
      resultWeek.textContent = "Dia da semana: SEXTA";
      break;
    case 6:
      resultWeek.textContent = "Dia da semana: SÁBADO";
      break;
  }
};

const monthDay = (date) => {
  switch (date.getMonth()) {
    case 0:
      resultMonthPt.textContent = "Mês: JANEIRO";
      break;
    case 1:
      resultMonthPt.textContent = "Mês: FEVEREIRO";
      break;
    case 2:
      resultMonthPt.textContent = "Mês: MARÇO";
      break;
    case 3:
      resultMonthPt.textContent = "Mês: ABRIL";
      break;
    case 4:
      resultMonthPt.textContent = "Mês: MAIO";
      break;
    case 5:
      resultMonthPt.textContent = "Mês: JUNHO";
      break;
    case 6:
      resultMonthPt.textContent = "Mês: JULHO";
      break;
    case 7:
      resultMonthPt.textContent = "Mês: AGOSTO";
      break;
    case 8:
      resultMonthPt.textContent = "Mês: SETEMBRO";
      break;
    case 9:
      resultMonthPt.textContent = "Mês: OUTUBRO";
      break;
    case 10:
      resultMonthPt.textContent = "Mês: NOVEMBRO";
      break;
    case 11:
      resultMonthPt.textContent = "Mês: DEZEMBRO";
      break;
  }
};
