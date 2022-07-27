import Avatar from "./modules/Avatar.js";
import Avatar2 from "./modules/Avatar2.js";

const turing = new Avatar(12, 23);
const lovelace = new Avatar2(50, 50);

console.log(turing, lovelace);

turing.forward();
turing.collectCoins();
turing.left();
turing.forward();
turing.back();

console.log("Turing", turing);

lovelace.forward();
lovelace.collectCoins();
lovelace.left();
lovelace.forward();
lovelace.back();

console.log("Lovelace", lovelace);
