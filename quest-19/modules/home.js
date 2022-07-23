import Cards from "./cards.js";

export default function home() {
    const app = document.querySelector("#container");

    app.innerHTML = `
        <button id="play">Iniciar</button>
    `;

    document.querySelector("#play").addEventListener("click", oi);
}

function oi() {
    const c = Cards();
    let a = c.completCard();

    console.log(a);
}
