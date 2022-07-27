import Avatar from "./Avatar.js";

export default class Cowboy extends Avatar {
    #ammo;
    constructor(x, y) {
        super(x, y);
        this.#ammo = 10;
        this.dp = 2;
    }

    attack() {
        if (this.#ammo > 0) {
            this.#ammo -= 1;
            return this.dp;
        }
        return false;
    }

    addAmmo() {
        this.#ammo += 1;
        return true;
    }
}
