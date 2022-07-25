import Random from "./Random.js";

export default function Cards() {
    const numCard = [];
    const numRandom = Random(75, 1);

    for (let i = 0; i < 10; i++) {
        numCard.push({
            number: numRandom.randomNumber(),
            drawn: false,
        });
    }

    function getCard() {
        return numCard;
    }

    function selectedNumber(num) {
        for (const element of numCard) {
            if (element.number == num) {
                element.drawn = true;

                return true;
            }
        }
        return false;
    }

    function completCard() {
        for (const element of numCard) {
            if (element.drawn == false) {
                return false;
            }
        }
        return true;
    }

    return {
        getCard,
        selectedNumber,
        completCard,
    };
}
