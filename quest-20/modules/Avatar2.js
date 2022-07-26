export default function Avatar2(x, y) {
    this.positionX = x;
    this.positionY = y;
    this.coins = 0;
}

Avatar2.prototype.getPosition = function () {
    return {
        x: this.positionX,
        y: this.positionY,
    };
};

Avatar2.prototype.getCoins = function () {
    return this.coins;
};

Avatar2.prototype.forward = function () {
    this.positionY++;
};

Avatar2.prototype.back = function () {
    if (this.positionY > 0) {
        this.positionY--;
    }
};

Avatar2.prototype.right = function () {
    this.positionX++;
};

Avatar2.prototype.left = function () {
    if (this.positionX > 0) {
        this.positionX--;
    }
};

Avatar2.prototype.collectCoins = function () {
    this.coins++;
};
