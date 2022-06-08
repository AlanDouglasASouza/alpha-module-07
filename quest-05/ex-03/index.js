const btn = document.querySelector("#btn-ex");
const select = document.querySelector("#select-operation");
const result = document.querySelector("#result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  exibition(select.value);
});

const exibition = (fruit) => {
  switch (fruit) {
    case "banana":
      result.style =
        "display: block; background-image: url('../../assets/bananas.jpg')";
      break;
    case "orange":
      result.style =
        "display: block; background-image: url('../../assets/laranja.jpg')";
      break;
    case "strawberry":
      result.style =
        "display: block; background-image: url('../../assets/morangos.jpg')";
      break;
    case "peach":
      result.style =
        "display: block; background-image: url('../../assets/peras.jpg')";
      break;
    case "grape":
      result.style =
        "display: block; background-image: url('../../assets/uva.jpg')";
      break;
    default:
      alert("Selecione uma das opções!");
  }
};
