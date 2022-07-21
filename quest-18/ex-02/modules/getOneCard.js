export default async function getOneCard(id) {
    try {
        const card = await fetch(
            `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
        );
        if (!card.ok) {
            return Promise.reject("[ERRO] Erro ao fazer a requisição");
        }
        const res = await card.json();
        //console.log(res.cards[0]);
        return res.cards[0];
    } catch (err) {
        Promise.reject(err);
    }
}
