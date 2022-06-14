const areaChat = document.querySelector("textarea");
const btnEnv = document.querySelector("#btn-env");
const btnClear = document.querySelector("#btn-clear");
const inputChat = document.querySelector("#msg");

btnClear.addEventListener("click", () => {
  areaChat.textContent = "";
  inputChat.focus();
});

btnEnv.addEventListener("click", () => {
  chatEnv(inputChat.value);
});

inputChat.onkeyup = (e) => {
  if (e.keyCode === 13) {
    chatEnv(inputChat.value);
  }
};

const chatEnv = (content) => {
  if (!content) {
    return;
  }
  areaChat.textContent += `\nVocê:   ${content}`;
  inputChat.value = "";
  inputChat.focus();
  areaChat.scrollTop = 369 * 999900;
};
