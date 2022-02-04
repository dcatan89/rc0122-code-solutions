/* exported intersection */
// input two parameters both arrays
// output new array that only has the intersection of both arrays
// declare an empty array literal
// declare a for loop and check if there is any same values  between both arrays
// if true push that value into the declared array
// return the declared array as the output

function intersection(first, second) {
  var intersection = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      intersection.push(first[i]);
    }
  }
  return intersection;
}
