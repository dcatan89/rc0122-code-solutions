console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = {
  p1: { name: 'DJ', hand: [] },
  p2: { name: 'AJ', hand: [] },
  p3: { name: 'RJ', hand: [] },
  p4: { name: 'KJ', hand: [] }
};

var cards = {
  rank: {
    two: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 2
    },
    three: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 3
    },
    four: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 4
    },
    five: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 5
    },
    six: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 6
    },
    seven: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 7
    },
    eight: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 8
    },
    nine: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 9
    },
    ten: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 10
    },
    Jack: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 10
    },
    Queen: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 10
    },
    King: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 10
    },
    Ace: {
      suit: ['clubs', 'diamonds', 'hearts', 'spades'],
      points: 11
    }
  }
};

console.log(cards, players);
console.log(players.p1);
