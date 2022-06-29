const btnCards = document.querySelector("#btn-cards");
const imgCard1 = document.querySelector("#card1");
const imgCard2 = document.querySelector("#card2");
const imgCard3 = document.querySelector("#card3");
const imgCard4 = document.querySelector("#card4");
const imgCard5 = document.querySelector("#card5");
const textResult = document.querySelector("#text-result");
const result = document.querySelector("#value-result");
let baralho = [];

btnCards.addEventListener("click", printCards);

cards("Diamonds");
cards("Clubs");
cards("Hearts");
cards("Spades");

function printCards() {
  const hand = [];

  shuffle();

  for (i = 1; i < 6; i++) {
    let card = document.querySelector(`#card${i}`);
    card.style.display = "block";
    card.src = `./assets/cards/${baralho[i].cardValue}${baralho[i].naipe[0]}.svg`;

    hand.push(baralho[i]);

    baralho.splice(i, 1);
  }

  if (typeCards(hand) === 5 && seqNumber(numberCard(hand))) {
    alert("Straight Flush");
  }
}

// Verificar quantas cartas do mesmo nipe tem na mão
function typeCards(hand) {
  let amount = 0;
  for (i = 0; i < hand.length; i++) {
    if (amount < filterCards(hand, hand[i].naipe).length) {
      amount = filterCards(hand, hand[i].naipe).length;
    }
  }
  return amount;
}

function filterCards(cards, paran) {
  const searchResult = cards.filter((value) => {
    return value.naipe === paran;
  });
  return searchResult;
}

// Verificar os valores das cartas escolhidas
const numberCard = (hand) => {
  let valueCards = [];
  hand.forEach((element) => {
    valueCards.push(element.value);
  });
  for (i = 0; i < valueCards.length; i++) {
    if (valueCards[i] === "J") {
      valueCards[i] = 11;
    }
    if (valueCards[i] === "Q") {
      valueCards[i] = 12;
    }
    if (valueCards[i] === "K") {
      valueCards[i] = 13;
    }
    if (valueCards[i] === "A") {
      valueCards[i] = 14;
    }
  }
  //console.log(valueCards);
  const result = valueCards.sort((a, b) => {
    return a - b;
  });

  return result;
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

// Verifica os valores das cartas se são iguais
function repeatCards(hand) {
  let amount = 0;
  for (i = 0; i < hand.length; i++) {
    if (amount < filterCardsValue(hand, hand[i]).length) {
      amount = filterCardsValue(hand, hand[i]).length;
    }
  }
  return amount;
}

function filterCardsValue(cards, paran) {
  const searchResult = cards.filter((value) => {
    return value === paran;
  });
  return searchResult;
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
