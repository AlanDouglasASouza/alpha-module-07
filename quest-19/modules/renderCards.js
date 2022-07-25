import playerCards from "../components/playerCards.js";
import Cards from "./Cards.js";
import Random from "./Random.js";

export default function renderCards() {
    const app = document.querySelector("#container");
    const playerOne = Cards();
    const playerTwo = Cards();
    const random = Random(75, 1);
    const count = Random(75, 1);

    app.innerHTML = `

        ${playerCards("1", playerOne.getCard())}

        <div id="result"></div>

        ${playerCards("2", playerTwo.getCard())}

    `;

    const result = document.querySelector("#result");
    const valueCards = document.querySelectorAll(".numbers");

    result.innerHTML = `
        Iniciando o Jogo!
    `;

    for (const element of valueCards) {
        element.addEventListener("click", () => {
            if (random.testNumber(parseInt(element.textContent))) {
                element.style = "background-color: green";

                switch (element.dataset.parent) {
                    case "1":
                        playerOne.selectedNumber(parseInt(element.textContent));

                        if (playerOne.completCard()) {
                            result.innerHTML = "Jogador 1 Ganhou!!";
                            clearInterval(playRandom);
                            document.querySelector("body").style =
                                "pointer-events: none;";
                            return true;
                        }

                        break;

                    case "2":
                        playerTwo.selectedNumber(parseInt(element.textContent));

                        if (playerTwo.completCard()) {
                            result.innerHTML = "Jogador 2 Ganhou!!";
                            clearInterval(playRandom);
                            document.querySelector("body").style =
                                "pointer-events: none;";
                            return true;
                        }
                    default:
                        console.log("Cartela não existe!");
                }
            }
        });
    }

    const playRandom = setInterval(() => {
        if (!count.randomNumber()) {
            clearInterval(playRandom);
            return (result.innerHTML = "Todos os números foram sorteados!");
        }

        result.innerHTML = `
        ${random.randomNumber()}  
    `;
    }, 5000);
}
