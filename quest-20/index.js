import Avatar from "./modules/Avatar.js";
import Avatar2 from "./modules/Avatar2.js";

const turing = new Avatar(12, 23);
const loveLace = new Avatar2(50, 50);

console.log(turing, loveLace);

turing.forward();
turing.collectCoins();
turing.left();
turing.forward();
turing.back();

console.log("Turing", turing);

loveLace.forward();
loveLace.collectCoins();
loveLace.left();
loveLace.forward();
loveLace.back();

console.log("Love Lace", loveLace);
