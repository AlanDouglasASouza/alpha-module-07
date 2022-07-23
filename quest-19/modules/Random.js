export default function Random(max, min) {
    const numbersDrawn = [];
    const drawnAmount = max - min;

    function randomNumber() {
        let response = Math.ceil(Math.random() * max);

        if (numbersDrawn.length > drawnAmount) {
            return false;
        }

        while (response < min || testNumber(response)) {
            response = Math.ceil(Math.random() * max);
        }
        numbersDrawn.push(response);

        return response;
    }

    function testNumber(num) {
        if (numbersDrawn.indexOf(num) == -1) {
            return false;
        }
        return true;
    }

    return {
        randomNumber,
        testNumber,
    };
}

/* const a = Random(10, 1);
for (i = 0; i < 11; i++) {
    console.log(a.randomNumber());
} */
