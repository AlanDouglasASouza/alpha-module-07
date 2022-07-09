export default function validateCep() {
  const cep = document.querySelector("input");
  const btnCons = document.querySelector("#btn-cons");

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
    if (iptCep.length === 9) {
      btnCons.disabled = false;
      btnCons.style = "cursor: pointer";
    }
  });

  /* function validation() {
    try {
      if (cep.value != 9) {
        throw "Digite o cep corretamente antes de proceguir.";
      } else {
        alert("Caiu aqui");
      }
    } catch (e) {
      console.log(e);
    }
  } */
}
