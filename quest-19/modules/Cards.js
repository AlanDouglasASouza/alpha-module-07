import Random from "./Random.js";

export default function Cards() {
    const numCard = [];
    const numRandom = Random(10, 1);

    for (let i = 0; i < 10; i++) {
        numCard.push({
            number: numRandom.randomNumber(),
            drawn: false,
        });
    }

    function getCard() {
        return numCard;
    }

    function dialNumber(num) {
        numCard.forEach((element) => {
            if (element.number == num) {
                element.drawn = true;
                return true;
            }

            return false;
        });
    }

    function completCard() {
        let res;

        numCard.forEach((element) => {
            if (element.drawn == false) {
                res = false;
                return false;
            }

            res = true;
        });

        return res;
    }

    return {
        getCard,
        dialNumber,
        completCard,
    };
}
