export default class Avatar {
    #x;
    #y;
    #coins;
    #hp;
    dp;

    constructor(_x, _y) {
        this.#x = _x;
        this.#y = _y;
        this.#coins = 0;
        this.#hp = 10;
        this.dp = 1;
    }

    get getPosition() {
        if (!this.kill()) return false;

        return {
            x: this.#x,
            y: this.#y,
        };
    }

    get getCoins() {
        if (!this.kill()) return false;

        return this.#coins;
    }

    forward() {
        if (!this.kill()) return false;

        this.#y++;
    }

    back() {
        if (!this.kill()) return false;

        if (this.#y > 0) {
            this.#y--;
        }
    }

    right() {
        if (!this.kill()) return false;

        this.#x++;
    }

    left() {
        if (!this.kill()) return false;

        if (this.#x > 0) {
            this.#x--;
        }
    }

    collectCoins() {
        if (!this.kill()) return false;

        this.#coins++;
    }

    attack() {
        if (!this.kill()) return false;

        return this.dp;
    }

    damage(point) {
        if (!this.kill()) return false;

        this.#hp = this.#hp - point;
        return true;
    }

    kill() {
        return this.#hp > 0;
    }
}
