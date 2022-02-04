/* exported flatten */
// input an array with possible arrays within the array
// output a new array with only values and no arrays within
// Declare a new variable and set it to an empty array, we want this as the output
// Declare a for loop to run through the array input
// check to see if a value is an array
// if true nest another for loop to check through the values
// push values to the array literal created in the begginning
// push values to the array literal if the value is not an array
// return the array declared as the output

function flatten(array) {
  var flattened = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
}
