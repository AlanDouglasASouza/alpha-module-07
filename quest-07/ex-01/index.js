const caption = document.querySelector("caption");
const model = document.querySelector("#model");
const fitter = document.querySelector("#fitter");
const velocity = document.querySelector("#velocity");
const acelleration = document.querySelector("#acelleration");
const buyValue = document.querySelector("#value");
const imageCar = document.querySelector("#image-car");
const select = document.querySelector("select");
const btn = document.querySelector("#btn");

const infoCars = {
  laFerrari: {
    model: "La Ferrari",
    fitter: "Ferrari",
    velocity: "354 km/h",
    acceleration: "1.8 segundos",
    value: "R$ 7.840.420",
    photo: "https://cdn.motor1.com/images/mgl/2PgYn/s1/ferrari-laferrari.jpg",
  },
  mcLarenElva: {
    model: "McLaren Elva",
    fitter: "McLaren",
    velocity: "362 km/h",
    acceleration: "1.8 segundos",
    value: "R$ 9.520.510",
    photo: "https://cdn.motor1.com/images/mgl/XPWO2/s1/mclaren-elva.webp",
  },
  monzaSp1: {
    model: "Ferrari Monza SP1",
    fitter: "Ferrari",
    velocity: "369 km/h",
    acceleration: "1.8 segundos",
    value: "R$ 9.520.510",
    photo: "https://cdn.motor1.com/images/mgl/7ypK7/s1/ferrari-monza-sp1.webp",
  },
  bentleyBacalar: {
    model: "Bentley Bacalar",
    fitter: "Bentley",
    velocity: "371 km/h",
    acceleration: "1.7 segundos",
    value: "R$ 10.640.570",
    photo: "https://cdn.motor1.com/images/mgl/JPGqE/s1/bentley-bacalar.webp",
  },
  battista: {
    model: "Pininfarina Battista",
    fitter: "Pininfarina",
    velocity: "350 km/h",
    acceleration: "1.9 segundos",
    value: "R$ 14.000.750",
    photo:
      "https://cdn.motor1.com/images/mgl/pv2vv/s1/pininfarina-battista.webp",
  },
  victor: {
    model: "Aston Martin Victor",
    fitter: "Aston Martin",
    velocity: "359 km/h",
    acceleration: "1.8 segundos",
    value: "R$ 16.800.900",
    photo:
      "https://cdn.motor1.com/images/mgl/WmLWo/s1/aston-martin-victor-static.webp",
  },
  lykan: {
    model: "Lykan Hypersport",
    fitter: "W Motors",
    velocity: "325 km/h",
    acceleration: "1.9 segundos",
    value: "R$ 19.041.020",
    photo:
      "https://cdn.motor1.com/images/mgl/qjmoq/s1/w-motors-lykan-hypersport.webp",
  },
};

window.onload = () => {
  cars(select.value);
};

btn.addEventListener("click", () => {
  cars(select.value);
});

const cars = (carSelect) => {
  switch (carSelect) {
    case "la-ferrari":
      tableCars(infoCars.laFerrari);
      break;
    case "mcLaren-elva":
      tableCars(infoCars.mcLarenElva);
      break;
    case "monza-sp1":
      tableCars(infoCars.monzaSp1);
      break;
    case "bentley-bacalar":
      tableCars(infoCars.bentleyBacalar);
      break;
    case "battista":
      tableCars(infoCars.battista);
      break;
    case "victor":
      tableCars(infoCars.victor);
      break;
    case "lykan":
      tableCars(infoCars.lykan);
      break;
  }
};

const tableCars = (car) => {
  caption.textContent = car.model;
  model.textContent = car.model;
  fitter.textContent = car.fitter;
  velocity.textContent = car.velocity;
  acelleration.textContent = car.acceleration;
  buyValue.textContent = car.value;
  imageCar.style = `background-image: url('${car.photo}')`;
};
