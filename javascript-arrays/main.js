var colors = [
  'red',
  'white',
  'blue'
];

console.log('value colors[0]', colors[0]);
console.log('value colors[1]', colors[1]);
console.log('value colors[2]', colors[2]);

var string = 'America is ' + colors[0] + ',' + ' ' + colors[1] + ',' + ' ' + colors[2] + '.';

console.log('value of string:', string);

colors[2] = 'green';

var string2 = 'Mexico is ' + colors[0] + ',' + ' ' + colors[1] + ',' + ' ' + colors[2] + '.';

console.log('value of string2:', string2);
console.log('value of colors:', colors);

var students = [
  'DJ',
  'KAT',
  'MOMO',
  'KIT'
];

var numberOfStudents = students.length;

console.log('There are ', numberOfStudents, ' students in the class.');
console.log('The last student in the array is', students[3]);
console.log('value of students:', students);
