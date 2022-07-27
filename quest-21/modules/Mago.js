import Avatar from "./Avatar.js";

export default class Mago extends Avatar {
    #mp;
    constructor(x, y) {
        super(x, y);
        this.#mp = 10;
        this.dp = 3;
    }

    attack() {
        if (this.#mp <= 1) {
            setTimeout(() => {
                this.#mp = 10;
            }, 7000);

            return true;
        } else {
            this.#mp--;
            return this.dp;
        }
    }
}
