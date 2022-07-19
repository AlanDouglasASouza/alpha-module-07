import cityService from "../services/cityService.js";
import weatherForecast from "./weatherForecast.js";

export default async function citys() {
    const divSel = document.querySelector('#form-calc');
    const select = document.querySelector("#select-operation");
    const result = document.querySelector("#result");   

    divSel.innerHTML += `
        <select id="select-citys">
            <option value="" disabled selected>Escolha uma cidade</option>
        </ select>
    `;

    const selCity = document.querySelector('#select-citys');

   try {
    const data = await cityService(select.value);
    for (const mun of data) {
        selCity.innerHTML += `<option value="${mun.id}">${mun.nome}</option>`;
      }
   }
   catch(err) {
    result.innerHTML = `[Erro] Erro na requisição: ${err}`;
    return Promise.reject(err); 
   }   

   selCity.addEventListener('input', () => {
    weatherForecast();    
});
}