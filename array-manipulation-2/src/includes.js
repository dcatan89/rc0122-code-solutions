/* exported includes */
// input array (any js array) and value( to search within the array)
// output boolean whether the value is in the array
// declare a for loop to check each value
// if the any value within the array matches the input value return true
// else the output will return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
