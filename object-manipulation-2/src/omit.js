/* exported omit */
// input an object which is source and keys which is a string value
// output is a new object literal that does not have a property in the source
// define a new object literal
// declare a for in loop to push the key/value pairs into the new object
// declare a for loop to run through the array
// within the loop check if any values of the array does not match keys in the object
// if true, use the delete keyword to omit key/values
// return the new object as the output

function omit(source, keys) {
  var omit = {};
  for (var prop in source) {
    omit[prop] = source[prop];
  }

  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]]) {
      delete omit[keys[i]];
    }
  }
  return omit;
}
