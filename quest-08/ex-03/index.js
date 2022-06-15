const form = document.querySelector("form");
const day = document.querySelector("#form-day");
const month = document.querySelector("#form-month");
const year = document.querySelector("#form-year");
const btn = document.querySelector("#btn-ver");
const resultText = document.querySelector("#result-text");
const divErr = document.querySelector("#box-err");
const title = document.querySelector("#box-title h1");
const divForm = document.querySelector("#box-form");
const divResult = document.querySelector("#box-result");
const resName = document.querySelector("#result-name");
const resBirth = document.querySelector("#result-birth");
const resWeight = document.querySelector("#result-weight");
const resHeight = document.querySelector("#result-height");
const resGender = document.querySelector("#result-gender");
const divJson = document.querySelector("#json");
const user = {
  name: "",
  birthDate: "",
  height: "",
  weight: "",
  gender: "",
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }
  validate();

  user.name = form.name.value;
  user.birthDate = new Date(`${month.value}-${day.value}-${year.value}`);
  user.height = parseInt(form.height.value);
  user.weight = parseFloat(form.weight.value);
  user.gender = form.gender.value;

  print();

  console.log(user);
});

const validate = () => {
  try {
    if (!form.name.value || form.name.value.length < 5) {
      throw "Field name is invalid!";
    }
    if (!validateDate()) {
      throw "Field birthDate is invalid!";
    }
    if (isNaN(parseFloat(form.weight.value))) {
      throw "Field weight is invalid!";
    }
    if (!Number.isInteger(parseFloat(form.height.value))) {
      throw "Field height is invalid!";
    }
    if (form.gender.value == "") {
      throw "Field gender is invalid!";
    }
  } catch (err) {
    title.style.display = "none";
    divErr.style.display = "flex";
    divErr.textContent = err;
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
    day.value = "";
    month.value = "";
    year.value = "";
    day.focus();
    return false;
  }
  return true;
};

const print = () => {
  divErr.style.display = "none";
  divForm.style.display = "none";
  divResult.style.display = "flex";
  divJson.textContent = JSON.stringify(user);

  resName.textContent = user.name;
  resBirth.textContent = user.birthDate.toLocaleString();
  resHeight.textContent = user.height;
  resWeight.textContent = user.weight;
  resGender.textContent = user.gender == "male" ? "Masculino" : "Feminino";
};
