import resultCep from "../module/cepResult.js";

resultCep;
export default function cepService() {
  const cep = document.querySelector("input");
  const divRes = document.querySelector("#box-form");

  const cepApi = cep.value.replace(/-/, "");
  const url = `https://cep.awesomeapi.com.br/json/${cepApi}`;

  fetch(url)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      divRes.innerHTML += `
            <h1>CEP inválido!</h1>
        `;
      return Promise.reject("Requisição não aceita!");
    })
    .then((data) => {
      console.log(data);
      resultCep(data);
    })
    .catch((err) => {
      console.error(err);
    });
}
