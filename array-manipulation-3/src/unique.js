/* exported unique */
// input one array
// output new array with unqiue values
// declare a new variable and assign it an empty array literal
// declare a for loop statement to check each value
// Declare another for loop within the loop
// push it into an array literal then check.

function unique(array) {
  var unique = [];
  for (var i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i]) === -1) {
      unique.push(array[i]);
    }
  }
  return unique;
}
