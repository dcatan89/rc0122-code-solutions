/* exported pick */
// input source ( an object) and keys (an array of strings)
// output a new object that contains all the properties of source listed in keys
// -only keys that are properties in source are used in output
// define a new object literal
// declare a for loop for the keys array and check if a value matches in source
// if true make the array value a property assigned a value the same as the source
// return the new object literal as the output

function pick(source, keys) {
  var pick = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] || source[keys[i]] !== undefined) {
      pick[keys[i]] = source[keys[i]];
    }
  }
  return pick;
}
