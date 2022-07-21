export default async function getDeck() {
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
