import AscII from "./AscII.js";

const btn = document.querySelector("#btn-submit");
const iptName = document.querySelector("#fullname");
const result = document.querySelector("#result");

btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const fullname = iptName.value;
    const ascII = new AscII(fullname);
    const code = ascII.getCode();

    try {
        const response = await fetch(
            `http://ubuntu.alphaedtech.org.br:8080/?string=${fullname}&code=${code}`
        );
        if (!response.ok) {
            Promise.reject("Erro na requisição!");
        }

        const data = await response.json();

        result.textContent = data.question;
    } catch (err) {
        console.error(err);
    }
});
