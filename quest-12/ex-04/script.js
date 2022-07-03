const baralho = [];

function createBar() {
  cards("Paus");
  cards("Espada");
  cards("Copas");
  cards("Ouro");
}

function cards(naipe) {
  for (i = 2; i <= 14; i++) {
    switch (i) {
      case 11:
        baralho.push({
          naipe: naipe,
          cardValue: "J",
        });
        break;
      case 12:
        baralho.push({
          naipe: naipe,
          cardValue: "Q",
        });
        break;
      case 13:
        baralho.push({
          naipe: naipe,
          cardValue: "K",
        });
        break;
      case 14:
        baralho.push({
          naipe: naipe,
          cardValue: "A",
        });
        break;
      default:
        baralho.push({
          naipe: naipe,
          cardValue: i,
        });
    }
  }
}
createBar();
//console.log(baralho);

function shuffle() {
  const index = [];
  let bar = [];

  for (i = 0; i < 52; i++) {
    let indexRandom = Math.floor(Math.random() * 52);

    while (index.indexOf(indexRandom) != -1) {
      indexRandom = Math.floor(Math.random() * 52);
    }
    index.push(indexRandom);

    bar.push(baralho[indexRandom]);
  }
  baralho = bar;
}

//console.log(shuffle());
const obj = [
  { naipe: 2, value: 2 },
  { naipe: 2, value: 3 },
  { naipe: 2, value: 4 },
  { naipe: 2, value: 5 },
  { naipe: 1, value: "J" },
  { naipe: 2, value: "K" },
  { naipe: 1, value: "A" },
  { naipe: 2, value: "Q" },
];

function filterCards(cards, paran) {
  const searchResult = cards.filter((value) => {
    return value.naipe === paran;
  });
  return searchResult;
}

function a() {
  let qnt = 0;
  for (i = 0; i < obj.length; i++) {
    if (qnt < filterCards(obj, obj[i].naipe).length) {
      qnt = filterCards(obj, obj[i].naipe).length;
    }
  }
  return qnt;
}

//console.log(a());

const numberCard = (hand) => {
  let alg = [];
  hand.forEach((element) => {
    alg.push(element.value);
  });
  for (i = 0; i < alg.length; i++) {
    if (alg[i] === "J") {
      alg[i] = 11;
    }
    if (alg[i] === "Q") {
      alg[i] = 12;
    }
    if (alg[i] === "K") {
      alg[i] = 13;
    }
    if (alg[i] === "A") {
      alg[i] = 14;
    }
  }
  //console.log(alg);
  let p = alg.sort((a, b) => {
    return a - b;
  });

  return p;
};

function seqNumber(numbers) {
  let count = 0;

  for (i = numbers[0]; i < numbers[numbers.length - 1]; i++) {
    if (numbers[count] + 1 != numbers[count + 1]) {
      return false;
    }
    count++;
  }
  return true;
}
//console.log(numberCard(obj));

//console.log(numberCard(obj));

function verificNumber(arr) {
  const newArr = [];

  for (i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) > -1) {
      newArr.push(arr[i]);
    }
  }
}
const arr = [1, 2, 1, 3, 6, 1, 2];
let resu = [];

function filterCardsValue(cards, paran) {
  const searchResult = cards.filter((value) => {
    return value === paran;
  });
  return searchResult;
}

function repeatCards(hand) {
  let amount = 0;
  for (i = 0; i < hand.length; i++) {
    if (
      filterCardsValue(hand, hand[i]).length > 1 &&
      resu.indexOf(filterCardsValue(hand, hand[i])) === -1
    ) {
      resu.push(filterCardsValue(hand, hand[i]));
    }
  }
  return amount;
}
//console.log(filterCardsValue(arr, 1));
//console.log(repeatCards(arr));
repeatCards(arr);
console.log(resu);
