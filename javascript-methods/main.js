var num1 = 1;
var num2 = 2;
var num3 = 3;

var maxNum = Math.max(num1, num2, num3);

console.log('Math.max value:', maxNum);

var heroArr = ['DJ', 'Superman', 'Spiderman', 'Hulk'];
var randomNumber = Math.random();

randomNumber = randomNumber * heroArr.length;

var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

var randomHero = heroArr[randomIndex];

console.log('value of randomHero:', randomHero);

var library = [{ title: 'Cat in the Hat', author: 'Dr.Seues' }, { title: 'Green Eggs and Ham', author: 'Dr.Seues' }, { title: 'Red Fish Blue FISH', author: 'Dr.Seues' }];
var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Dj Catan';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
