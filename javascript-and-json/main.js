var array = [
  {
    author: 'Dr.Suess',
    isbn: 9780007355914,
    title: 'Green Eggs and Ham'
  },
  {
    author: 'Dr.Suess',
    isbn: 9780007158447,
    title: 'Cat in the Hat'
  },
  {
    author: 'Dr.Suess',
    isbn: 9785170505579,
    title: 'Horton Hears a Who!'
  }
];

console.log('array', array);
console.log('typeof array:', typeof array);

console.log('json stringified:', JSON.stringify(array));
console.log('typeof json stringified:', typeof JSON.stringify(array));

var student = '{"numberId": 1438 , "name": "DJ" }';
console.log('student', student);
console.log('typeof student', typeof student);

student = JSON.parse(student);
console.log('student:', student);
console.log('typeof student', typeof student);
