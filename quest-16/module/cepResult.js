import home from "./home.js";
import renderMap from "./map.js";

export default function resultCep(data) {
  const container = document.querySelector("#container");
  container.innerHTML = `
    <div id="consult-cep" class="box">
        <table>
          <tr>
            <td class="title-tab">Endereço</td>
            <td class="content-tab">${data.address}</td>
          </tr>
          <tr>
            <td class="title-tab">Bairro</td>
            <td class="content-tab">${data.district}</td>
          </tr>
          <tr>
            <td class="title-tab">Cidade</td>
            <td class="content-tab">${data.city}</td>
          </tr>
          <tr>
            <td class="title-tab">Estado</td>
            <td class="content-tab">${data.state}</td>
          </tr>
          <tr>
            <td class="title-tab">Latitude</td>
            <td class="content-tab" id="lat" >${data.lat}</td>
          </tr>
          <tr>
            <td class="title-tab">Longitude</td>
            <td class="content-tab" id="long" >${data.lng}</td>
          </tr>
        </table>
      </div>
      <div class="box" id="buttons-map">
        <button id="btn-map">Exibir Mapa</button></br>
        <button id="btn-back">Voltar</button></br>
      </div>
    `;
  document.querySelector("#btn-back").onclick = () => {
    back();
  };

  document.querySelector("#btn-map").onclick = () => {
    renderMapCep();
  };
}

function back() {
  location.reload();
}

function renderMapCep() {
  const lat = document.querySelector("#lat");
  const long = document.querySelector("#long");

  renderMap(lat.textContent, long.textContent);
}
