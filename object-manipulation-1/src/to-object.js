/* exported toObject */
// input an array with two values, string that will be the key and a value at index 1
function toObject(keyValuePair) {
  var object = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];

  object[key] = value;
  return object;
}

// define an object literal
// define a key and assign it the value of the first index
// define a value and assign it the value of the second index
// set the value of the object property using bracket notation
// return the object as the output
