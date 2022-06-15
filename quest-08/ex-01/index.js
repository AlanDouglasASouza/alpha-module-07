const form = document.querySelector("form");
const day = document.querySelector("#form-day");
const month = document.querySelector("#form-month");
const year = document.querySelector("#form-year");
const btn = document.querySelector("#btn-ver");
const resultText = document.querySelector("#result-text");
const user = {
  name: "",
  birthDate: "",
  height: "",
  weight: "",
  gender: "",
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validateNull()) {
    return;
  }
  if (!validateDate()) {
    return;
  }
  user.name = form.name.value;
  user.birthDate = new Date(`${month.value}-${day.value}-${year.value}`);
  user.height = parseInt(form.height.value);
  user.weight = parseFloat(form.weight.value);
  user.genre = form.gender.value;
  console.log(user);
});

const validateNull = () => {
  if (
    !form.name.value ||
    !form.weight.value ||
    !form.weight.value ||
    !form.gender.value
  ) {
    alert("Preencha todos os campos antes de continuar!");
    return false;
  }
  return true;
};

const validateDate = () => {
  const date = new Date(`${month.value}-${day.value}-${year.value}`);
  if (
    day.value < 1 ||
    day.value > 31 ||
    month.value < 1 ||
    month.value > 12 ||
    year.value.length != 4 ||
    date.getTime() > new Date().getTime()
  ) {
    alert("Preencha uma data valida!");
    console.error("Data invalida");
    day.value = "";
    month.value = "";
    year.value = "";
    day.focus();
    return false;
  }
  return true;
};
