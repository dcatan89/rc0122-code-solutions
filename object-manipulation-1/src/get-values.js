/* exported getValues */
function getValues(object) {
  var values = [];
  for (var prop in object) {
    values.push(object[prop]);
  }
  return values;
}

// input is an object output is an array of values of the properties in the object
// define a new array that will be the output
// loop through the properties/keys and take the values
// push the values into the created array
// return the array as output
