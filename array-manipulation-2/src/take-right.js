/* exported takeRight */
// input an array  and a count(positive interger)
// output new array containing values from the count to  array.length
// Define an array literal use that as output storage
// check if count is greater than array length and return the array if true
// declare a for loop that starts at the count and ends at array length
// push each value into the new array
// return the new array as output once the loop ends
function takeRight(array, count) {
  var takeRight = [];
  if (count > array.length) {
    return array;
  }
  for (var i = array.length - count; i < array.length; i++) {
    takeRight.push(array[i]);
  }
  return takeRight;
}
