const cep = document.querySelector("input");

cep.onkeyup = (event) => {
  const iptCep = cep.value;

  if (iptCep.length === 5 && event.keyCode != 8) {
    cep.value = iptCep.concat("-");
  }
  if (iptCep.length > 9) {
    const cepTot = iptCep.substring(0, iptCep.length - 1);
    cep.value = cepTot;
  }
};

cep.addEventListener("input", function (e) {
  const iptCep = cep.value;
  if (isNaN(e.data)) {
    const cepNum = iptCep.substring(0, iptCep.length - 1);
    cep.value = cepNum;
  }
  console.log(e);
});
