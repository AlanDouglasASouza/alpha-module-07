import Error from "./modules/Error.js";

const btn = document.querySelector("#btn-submit");
const iptName = document.querySelector("#fullname");
const result = document.querySelector("#result");

btn.addEventListener("click", async (e) => {
    e.preventDefault();

    console.log(iptName.value);

    try {
        JSON.parse(iptName.value);
        result.innerHTML = "Sucesso!";
        return true;
    } catch (err) {
        const error = new Error();
        error.setStatus(400);
        error.setInfo("Valor passado não é um Json!");

        result.innerHTML = `Erro status: ${error.getObject().status}, motivo: ${
            error.getObject().inf0
        }`;
    }
});
