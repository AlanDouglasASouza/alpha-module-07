import home from "./module/home.js";
import cepService from "./services/cepService.js";
import validateCep from "./validates/validateCep.js";

const cep = document.querySelector("input");

home();
renderPage();
validateCep();

function renderPage() {
  const btnCons = document.querySelector("#btn-cons");
  btnCons.onclick = () => {
    cepService();
  };
}
