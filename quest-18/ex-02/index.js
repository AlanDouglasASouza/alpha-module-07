import printCards from "./modules/printCards.js";

const app = document.querySelector("#app");

app.innerHTML = `
        <button id="btn-play">Play Cards</button>
        <div id="box-cards"></div>
        <button id="btn-restart">Restart</button>
    `;

document.querySelector("#btn-play").addEventListener("click", () => {
    printCards();
});

document.querySelector("#btn-restart").addEventListener("click", () => {
    location.reload();
});
