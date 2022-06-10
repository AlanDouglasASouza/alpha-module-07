const body = document.querySelector("body");
const title = document.querySelector("#box-title h1");
const text = document.querySelector("#box-title p");
const bombArm = document.querySelector("#bomb-arm");
const bombDesarm = document.querySelector("#bomb-desarm");
const divCont = document.querySelector("#cont");

window.onload = () => {
  const milliseg = 60000;
  let cnt = milliseg / 1000;

  const seg = setInterval(() => {
    cnt--;
    cont();
    divCont.textContent = `Vai explodir em ${cnt}`;
  }, 1000);

  const bomb = setTimeout(() => {
    const audio = new Audio("../../assets/audio/explosion.mp3");
    body.style =
      "background-image: url('../../assets/nuclear-2136244_1920.jpg')";
    bombArm.style =
      "background-image: url('../../assets/explosion-417894_1280.png')";
    audio.play();
    title.textContent = "EXPLODIU!";
    text.textContent = "Não foi dessa vez! A bomba explodiu!";
    clearInterval(seg);
    divCont.style = "display: none";
  }, milliseg);

  bombArm.onclick = () => {
    clearTimeout(bomb);
    clearInterval(seg);
    disarm(cnt);
  };
};

const cont = () => {
  const audio = new Audio("../../assets/audio/tick.wav");
  audio.play();
};

const explosion = () => {
  const audio = new Audio("../../assets/audio/explosion.mp3");
  body.style = "background-image: url('../../assets/nuclear-2136244_1920.jpg')";
  bombArm.style =
    "background-image: url('../../assets/explosion-417894_1280.png')";
  audio.play();
  title.textContent = "EXPLODIU!";
  text.textContent = "Não foi dessa vez! A bomba explodiu!";
  divCont.style = "display: none";
};

const disarm = (cnt) => {
  bombArm.style = "display: none";
  bombDesarm.style = "display: block";
  title.textContent = "Bomba desarmada!";
  text.textContent = "Uffa! Você conseguiu desarmar a bomba a tempo!";
  divCont.textContent = `${cnt} segundos`;
};
