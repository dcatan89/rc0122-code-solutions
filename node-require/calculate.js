const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const num1 = parseFloat(process.argv[2]);
const operator = process.argv[3];
const num2 = parseFloat(process.argv[4]);

if (operator === ('plus' || '+')) {
  const sum = add(num1, num2);
  console.log(`${num1} + ${num2} = ${sum}`);
} else if (operator === ('minus' || '-')) {
  const difference = subtract(num1, num2);
  console.log(`${num1} - ${num2} = ${difference}`);
} else if (operator === ('divide' || '/')) {
  const quotient = divide(num1, num2);
  console.log(`${num1} / ${num2} = ${quotient}`);
} else if (operator === ('multiply' || '*')) {
  const multiplied = multiply(num1, num2);
  console.log(`${num1} x ${num2} = ${multiplied}`);
} else {
  console.log('Unknown operator');
}
