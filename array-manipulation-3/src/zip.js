/* exported zip */
// input two parameters both arrays
// output an array of arrays using both same indexes of each input
// declare an empty array literal for the output;
// check to see which length is bigger, the smaller length will be used for the for loop condition
// within the either for loop used declare another array literal and push the first array at i and then the second array at i;
// Then push the whole array into the first array
// after the loop return the first declared array as the output;

function zip(first, second) {
  var zip = [];
  if (first.length === second.length || first.length > second.length) {
    for (var i = 0; i < second.length; i++) {
      var chunks = [];
      chunks.push(first[i], second[i]);
      zip.push(chunks);
    }
  } else {
    for (var j = 0; j < first.length; j++) {
      var pieces = [];
      pieces.push(first[j], second[j]);
      zip.push(pieces);
    }
  }
  return zip;
}
