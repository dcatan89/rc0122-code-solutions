const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

if (process.argv[3] === ('plus' || '+')) {
  const sum = add(parseFloat(process.argv[2]), parseFloat(process.argv[4]));
  console.log(`${process.argv[2]} + ${process.argv[4]} = ${sum}`);
} else if (process.argv[3] === ('minus' || '-')) {
  const difference = subtract(parseFloat(process.argv[2]), parseFloat(process.argv[4]));
  console.log(`${process.argv[2]} - ${process.argv[4]} = ${difference}`);
} else if (process.argv[3] === ('divide' || '/')) {
  const quotient = divide(parseFloat(process.argv[2]), parseFloat(process.argv[4]));
  console.log(`${process.argv[2]} / ${process.argv[4]} = ${quotient}`);
} else if (process.argv[3] === ('multiply' || '*')) {
  const multiplied = multiply(parseFloat(process.argv[2]), parseFloat(process.argv[4]));
  console.log(`${process.argv[2]} x ${process.argv[4]} = ${multiplied}`);
} else {
  console.log('Unknown operator');
}
