function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var seconds = convertMinutesToSeconds(3);

console.log('value of seconds:', seconds);

function greet(name) {
  return 'Hey, ' + name;
}

var greeting = greet('DJ');

console.log('value of greeting:', greeting);

function getArea(width, height) {
  return width * height;
}

var areaResult = getArea(5, 6);

console.log('value of area:', areaResult);

function getFirstName(person) {
  return person.firstName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

console.log('firstName value:', firstName);

function getLastElement(array) {
  return array[array.length - 1];
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('Last element of array:', lastElement);
