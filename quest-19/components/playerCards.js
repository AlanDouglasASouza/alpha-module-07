import playerService from "../services/playerService.js";

export default function playerCards(name, list) {
    return `
        <div class="box" id="container-player">
            <div class="player">
                <p>Jogador ${name}</p>
                <div class="box" id="card-one">
                    ${playerService(list, name)}
                </div> 
            </div>
        </div>
    `;
}
