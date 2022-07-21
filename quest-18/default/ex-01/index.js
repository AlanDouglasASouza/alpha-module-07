async function cards() {
    const response = [];
    try {
        const cardId = await getDeck();
        for (let i = 0; i < 5; i++) {
            const card = await getOneCard(cardId);
            response.push(await card);
        }
        console.log(response);
        return response;
    } catch (err) {
        Promise.reject(`[ERRO] Erro ao fazer requisição: ${err}`);
    }
}

async function getDeck() {
    try {
        const deck = await fetch(
            "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        );

        if (!deck.ok) {
            console.log("Ruim");
            return Promise.reject("[ERRO] Erro ao fazer a requisição");
        }
        const res = await deck.json();

        return res.deck_id;
    } catch (err) {
        Promise.reject(err);
    }
}

async function getOneCard(id) {
    try {
        const card = await fetch(
            `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
        );
        if (!card.ok) {
            return Promise.reject("[ERRO] Erro ao fazer a requisição");
        }
        const res = await card.json();
        return res.cards[0];
    } catch (err) {
        Promise.reject(err);
    }
}

cards();
