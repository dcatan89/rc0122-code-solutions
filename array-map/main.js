const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
const prices = numbers.map(numbers => `$${numbers.toFixed(2)}`);
const upperCased = languages.map(word => word.toUpperCase());
const firstLetters = languages.map(word => word[0]);
console.log(`Numbers but doubled: ${doubled}`);
console.log(`Prices: ${prices}`);
console.log(`All Uppercased: ${upperCased}`);
console.log(`Only First Letters: ${firstLetters}`);
