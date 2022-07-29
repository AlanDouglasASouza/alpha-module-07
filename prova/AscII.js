export default class AscII {
    string;
    code;

    constructor(_string) {
        this.string = _string;
    }

    getArray(str) {
        let charCodeArr = [];

        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            charCodeArr.push(code);
        }

        return charCodeArr;
    }

    getCode() {
        let sum = 0;
        this.code = this.getArray(this.string);

        this.code.forEach((element) => {
            sum += element;
        });

        return sum;
    }
}
