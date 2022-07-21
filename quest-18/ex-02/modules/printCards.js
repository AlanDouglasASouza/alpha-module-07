import getDeck from "./getDeck.js";
import getOneCard from "./getOneCard.js";

export default async function printCards() {
    const cards = document.querySelector("#box-cards");
    const btnPlay = document.querySelector("#btn-play");
    const btnRestart = document.querySelector("#btn-restart");
    const body = document.querySelector("body");
    const deck = await getDeck();

    body.style.cursor = "wait";
    btnPlay.style.display = "none";
    cards.style.display = "flex";

    for (let i = 0; i < 5; i++) {
        const card = await getOneCard(deck);
        console.log(card);
        cards.innerHTML += `
            <img src="${card.image}" class="cards"></img>
        `;
    }

    btnRestart.style.display = "block";
    body.style.cursor = "default";
}
