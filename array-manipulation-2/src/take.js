/* exported take */
// input is an array and a count(a positive number)
// output is NEW ARRAY containing only values up to the count
// we want to define a new array literal, check for edge cases
// check if count is greater than values in array
// loop through array until the count

function take(array, count) {
  var takeArr = [];
  if (count > array.length) {
    return array;
  }
  for (var i = 0; i < count; i++) {
    takeArr.push(array[i]);
  }
  return takeArr;
}

// define an array
// check if count is greater than array length, if yes we want to return the array
// declare a for loop to itterate through the array up until the count input
// push the values into the new array
// once the loop ends return the new array as output
