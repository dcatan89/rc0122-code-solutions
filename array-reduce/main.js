const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const initialValue = 0;

const sum = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue);

console.log('Sum:', sum);

const product = numbers.reduce(
  (previousValue, currentValue) => previousValue * currentValue);

console.log('Product:', product);

const balance = account.reduce(
  (previousValue, currentValue) => {
    let { type = currentValue.type, amount } = previousValue;
    const { amount: amount1 } = currentValue;
    if (currentValue.type === 'withdrawal') {
      amount = amount - amount1;
      previousValue.amount = amount;
      return previousValue;
    }

    amount = amount + amount1;
    previousValue.amount = amount;
    return previousValue;
  }
);

console.log('Balance:', balance.amount);

const composite = traits.reduce(
  (pValue, cValue) => {
    const returnedObj = Object.assign(pValue, cValue);
    return returnedObj;
  },
  {}
);

console.log('Composite:', composite);
