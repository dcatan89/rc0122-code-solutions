/* exported toObject */
// input an array with two values, string that will be the key and a value at index 1
function toObject(keyValuePair) {
  var object = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];

  object[key] = value;
  return object;
}
