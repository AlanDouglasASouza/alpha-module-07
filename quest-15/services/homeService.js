import result from "../modules/result.js";

export default function homeService() {
  const sel = document.querySelector("select");
  const dataInitial = document.querySelector("#initial-date");
  const dataFinal = document.querySelector("#final-date");
  const startDate = dataInitial.value.replace(/-/g, "");
  const endDate = dataFinal.value.replace(/-/g, "");
  const days =
    new Date(dataFinal.value).getTime() - new Date(dataInitial.value).getTime();
  const resultDays = days / 86400000;
  const datas = [];
  let coinData;

  fetch(`https://economia.awesomeapi.com.br/last/${sel.value}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Requisição não aceita!");
    })
    .then((data) => {
      const a = sel.value.replace(/-/, "");
      coinData = data[a].ask;
    })
    .catch((err) => {
      console.log(err);
    });

  try {
    if (resultDays < 0 || !sel.value)
      throw "Dias ou cotação inválidos! Insira datas iniciais e finais adquadas e seleciona a cotação desejada.";
  } catch (e) {
    console.log(e);
    return;
  }

  for (let i = 0; i < resultDays; i++) {
    const dtIni = new Date(
      new Date(dataInitial.value + " ").getTime() + 86400000 * i
    );
    const dtIniSub = dtIni.toISOString().substring(0, 10);
    const dateIni = dtIniSub.replace(/-/g, "");

    const dtEnd = new Date(
      new Date(dataInitial.value + " ").getTime() + 86400000 * (i + 1)
    );
    const dtEndSub = dtEnd.toISOString().substring(0, 10);
    const dateEnd = dtEndSub.replace(/-/g, "");

    result();

    getCots(sel.value, dateIni, dateEnd);
  }

  function getCots(coin, start, end) {
    fetch(
      `https://economia.awesomeapi.com.br/json/daily/${coin}/?start_date=${start}&end_date=${end}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Requisição não aceita!");
      })
      .then((data) => {
        console.log(data);

        const tab = document.querySelector("table");

        tab.innerHTML += `
          <tr>
            <td class="content-tab">${data[0].create_date}</td>
            <td class="content-tab">${coinData}</td>
            <td class="content-tab">${data[0].high}</td>
            <td class="content-tab">${data[0].low}</td>
            <td class="content-tab">${data[0].ask}</td>
          </tr>
        `;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
