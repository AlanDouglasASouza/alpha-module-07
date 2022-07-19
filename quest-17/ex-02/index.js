import citys from "./modules/selectCity.js";
import selectUf from "./services/stateService.js";

const select = document.querySelector("#select-operation");
const result = document.querySelector("#result");

select.addEventListener('input', () => {
  citys();
});

printSelectUf();

async function printSelectUf() {  
  try {
    const data = await selectUf();
    for (const mun of data) {
      select.innerHTML += `<option value="${mun.id}">${mun.nome}</option>`
    }
  }
  catch(err) {
    result.innerHTML = `[Erro] Erro na requisição: ${err}`;
    return Promise.reject(err);
  } 
}
