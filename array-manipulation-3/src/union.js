/* exported union */
// input two parameters both arrays
// output new array of both second array has to have unique values
// declare a new array literal
// declare a for loop for the first array and push the values into the new array
// declare another for loop and check if the values are already in the new array
// if values are not in the new array push the values into it
// return the new array as the output

function union(first, second) {
  var union = [];
  for (var i = 0; i < first.length; i++) {
    union.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (union.indexOf(second[j]) === -1) {
      union.push(second[j]);
    }
  }
  return union;
}
