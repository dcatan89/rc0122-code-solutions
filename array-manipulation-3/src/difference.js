/* exported difference */
// input two parameters both arrays;
// output is an array of the symmetric differnece between one and two
// declare an empty array literal
// declare a for loop set to the length of the first array
// check using the second array to see if the indexOf at each value is -1
// if true then push the value into the array literal
// next check to see the same for the second array using the indexOf the first array
// return the declared array as the output

function difference(first, second) {
  var difference = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      difference.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      difference.push(second[j]);
    }
  }
  return difference;
}
