import home from "./components/home.js";
import renderCards from "./modules/renderCards.js";

const app = document.querySelector("#container");

app.innerHTML = home();

document.querySelector("#play").addEventListener("click", () => {
    renderCards();
});
