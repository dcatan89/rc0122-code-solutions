var student = {
  firstName: 'DJ',
  lastName: 'Catan',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'lab tech';

console.log('value of liveInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Peaches',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
