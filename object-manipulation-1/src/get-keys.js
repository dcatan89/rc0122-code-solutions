/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var prop in object) {
    keys.push(prop);
  }
  return keys;
}

// input is an object output is an array of the key values
// define a function that takes an object
// define an array literal
// loop through the object properties and push them into the new array literal
// return the array as the output
