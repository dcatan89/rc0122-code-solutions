/* exported dropRight */
// input array and count(postive interger)
// output new array with only the values not ommitted by count
// define a new array literal
// check if count is greater than the array length, if true return array as output
// declare for loop start at index 0 and end it at array length - count;
// push each value into new array
// return the new array as the output
function dropRight(array, count) {
  var dropRight = [];
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < array.length - count; i++) {
    dropRight.push(array[i]);
  }
  return dropRight;
}
