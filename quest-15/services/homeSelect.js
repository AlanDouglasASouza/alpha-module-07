export default function homeSelect() {
  const sel = document.querySelector("select");
  const url = "https://economia.awesomeapi.com.br/json/available";

  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Requisição não aceita!");
    })
    .then((data) => {
      for (let coin in data) {
        sel.innerHTML += `
            <option value=${coin}>${data[coin]}</option>
        `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
