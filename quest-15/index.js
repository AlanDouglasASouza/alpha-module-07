import home from "./modules/home.js";
import homeService from "./services/homeService.js";

home();
document.querySelector("button").onclick = () => {
  document.body.style = "cursor: wait";
  homeService();
  document.body.style = "cursor: default";
};
