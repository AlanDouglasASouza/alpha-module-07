const btn = document.querySelector("#btn-start");
const btnStop = document.querySelector("#btn-stop");
const selectMinutes = document.querySelector("#select-minutes");
const selectSecunds = document.querySelector("#select-secunds");
const result = document.querySelector("#result");

window.onload = () => {
  options(selectMinutes);
  options(selectSecunds);
};

btn.addEventListener("click", () => {
  timer(selectSecunds.value, selectMinutes.value);
  btn.style = "display: none";
  btnStop.style = "display: block";
});

const options = (sel) => {
  for (i = 0; i < 60; i++) {
    let item = document.createElement("option");
    if (i < 10) {
      item.text = `0${i}`;
    } else {
      item.text = `${i}`;
    }
    sel.appendChild(item);
  }
};

const timer = (secunds, minutes) => {
  const audio = new Audio("../../assets/audio/alarme.mp3");
  const timeSec = (minutes * 60 + secunds) * 0.95;
  let min = parseInt(minutes);
  let sec = secunds;

  const finals = setTimeout(finalsSecunds, timeSec * 1000);

  const time = setInterval(() => {
    if (min == 0 && sec == 0) {
      audio.play();
      clearInterval(time);
      return;
    }
    if (sec == 0) {
      sec = 60;
      min--;
    }
    sec--;

    result.innerHTML =
      (min < 10 ? "0" + min : min) + " : " + (sec < 10 ? "0" + sec : sec);
  }, 1000);

  btnStop.onclick = () => {
    clearInterval(time);
    clearTimeout(finals);
    audio.pause();
    result.innerHTML = "00 : 00";
    result.style = "color: #ffffff";
    btnStop.style = "display: none";
    btn.style = "display: block";
  };
};

const finalsSecunds = () => {
  result.style = "color: red";
};
