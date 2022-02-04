/* exported drop */
// input an array, and a count that will be the indexes not included
// output: a NEW ARRAY containing everything after the count
// Define a new array literal
// check if the count is greater than array length
// if true then return array as the output
// declare a for loop that starts at the count and pushes the values into the new array
// once the loop ends, return the new array as the output
function drop(array, count) {
  var dropArr = [];
  if (count > array.length) {
    return array;
  }
  for (var i = count; i < array.length; i++) {
    dropArr.push(array[i]);
  }
  return dropArr;
}
