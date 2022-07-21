const btnPlay = document.querySelector("button");
const response = [];

btnPlay.addEventListener("click", () => {
    cards();
});

function cards() {
    getDeck()
        .then((res) => {
            const data = [];

            for (let i = 0; i < 5; i++) {
                data.push(getOneCard(res));
            }

            Promise.all(data).then((resp) => {
                for (let i = 0; i < 5; i++) {
                    response.push(resp[i]);
                }
            });

            console.log(response);
        })
        .catch((err) => {
            Promise.reject(err);
        });
}

function getDeck() {
    return new Promise((resolve, reject) => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                Promise.reject("[ERRO] Erro ao fazer a requisição");
            })
            .then((res) => {
                resolve(res.deck_id);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

function getOneCard(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                Promise.reject("[ERRO] Erro ao fazer a requisição");
            })
            .then((res) => {
                resolve(res.cards[0]);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
