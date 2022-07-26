export default class Avatar {
    constructor(x, y) {
        this.positionX = x;
        this.positionY = y;
        this.coins = 0;
    }

    get getPosition() {
        return {
            x: this.positionX,
            y: this.positionY,
        };
    }

    get getCoins() {
        return this.coins;
    }

    forward() {
        this.positionY++;
    }

    back() {
        if (this.positionY > 0) {
            this.positionY--;
        }
    }

    right() {
        this.positionX++;
    }

    left() {
        if (this.positionX > 0) {
            this.positionX--;
        }
    }

    collectCoins() {
        this.coins++;
    }
}
