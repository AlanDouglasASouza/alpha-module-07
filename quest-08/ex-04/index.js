const areaChat = document.querySelector("textarea");
const btnEnv = document.querySelector("#btn-env");
const result = document.querySelector("#result");

btnEnv.addEventListener("click", () => {
  try {
    result.textContent = "Parsable JSON string!";
    if (!JSON.parse(areaChat.value)) {
      throw error;
    } else {
      console.log(JSON.parse(areaChat.value));
    }
  } catch (error) {
    result.textContent = error;
  }
});
