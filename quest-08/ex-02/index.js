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

  validate();

  user.name = form.name.value;
  user.birthDate = new Date(`${month.value}-${day.value}-${year.value}`);
  user.height = parseInt(form.height.value);
  user.weight = parseFloat(form.weight.value);
  user.gender = form.gender.value;
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
    alert(err);
    return false;
  }
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
