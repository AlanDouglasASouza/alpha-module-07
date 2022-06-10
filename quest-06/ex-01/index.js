const body = document.querySelector("body");
const title = document.querySelector("#box-title h1");
const text = document.querySelector("#box-title p");
const bombArm = document.querySelector("#bomb-arm");
const bombDesarm = document.querySelector("#bomb-desarm");

window.onload = () => {
  const bomb = setTimeout(explosion, 10000);

  bombArm.onclick = () => {
    clearTimeout(bomb);
    disarm();
  };
};

const explosion = () => {
  const audio = new Audio("../../assets/audio/explosion.mp3");
  body.style = "background-image: url('../../assets/nuclear-2136244_1920.jpg')";
  bombArm.style =
    "background-image: url('../../assets/explosion-417894_1280.png')";
  audio.play();
  title.textContent = "EXPLODIU!";
  text.textContent = "Não foi dessa vez! A bomba explodiu!";
};

const disarm = () => {
  bombArm.style = "display: none";
  bombDesarm.style = "display: block";
  title.textContent = "Bomba desarmada!";
  text.textContent = "Uffa! Você conseguiu desarmar a bomba a tempo!";
};
