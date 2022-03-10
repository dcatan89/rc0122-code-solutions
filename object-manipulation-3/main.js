/* eslint-disable no-prototype-builtins */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

var p1 = { name: 'DJ', hand: [] };
var p2 = { name: 'AJ', hand: [] };
var p3 = { name: 'RJ', hand: [] };
var p4 = { name: 'KJ', hand: [] };

var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

function points(p) {
  var points = 0;
  for (var i = 0; i < 2; i++) {
    if (p.hand[i].hasOwnProperty('Ace')) {
      points += 11;
    } else if (p.hand[i].hasOwnProperty('Queen') || p.hand[i].hasOwnProperty('Jack') || p.hand[i].hasOwnProperty('King') ||
   p.hand[i].hasOwnProperty(10)) {
      points += 10;
    } else if (p.hand[i].hasOwnProperty(9)) {
      points += 9;
    } else if (p.hand[i].hasOwnProperty(8)) {
      points += 8;
    } else if (p.hand[i].hasOwnProperty(7)) {
      points += 7;
    } else if (p.hand[i].hasOwnProperty(6)) {
      points += 6;
    } else if (p.hand[i].hasOwnProperty(5)) {
      points += 5;
    } else if (p.hand[i].hasOwnProperty(4)) {
      points += 4;
    } else if (p.hand[i].hasOwnProperty(3)) {
      points += 3;
    } else if (p.hand[i].hasOwnProperty(2)) {
      points += 2;
    }
  }
  return points;
}

function makeDeck(array, array2) {
  var deck = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      var card = {};
      card[array2[j]] = array[i];
      deck.push(card);
    }
  }
  return deck;
}

var realDeck = makeDeck(suits, ranks);

function play() {
  var shuffle1 = _.shuffle(realDeck);

  p1.hand = _.takeRight(shuffle1, 2);
  p2.hand = _.take(shuffle1, 2);
  shuffle1.pop();
  shuffle1.pop();
  shuffle1.shift();
  shuffle1.shift();
  p3.hand = _.takeRight(shuffle1, 2);
  p4.hand = _.take(shuffle1, 2);

  var p1points = points(p1);
  var p2points = points(p2);
  var p3points = points(p3);
  var p4points = points(p4);

  if (p1points > (p2points && p3points && p4points)) {
    console.log('Winner:', p1, 'Points:', p1points);
  } else if (p2points > (p3points && p1points && p4points)) {
    console.log('Winner:', p2, 'Points:', p2points);
  } else if (p3points > (p2points && p1points && p4points)) {
    console.log('Winner:', p3, 'Points:', p3points);
  } else {
    console.log('Winner:', p4, 'Points:', p4points);
  }
}

play();
