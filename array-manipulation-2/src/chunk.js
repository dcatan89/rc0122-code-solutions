/* exported chunk */
// input array and size(chunk value)
// output is a new array of arrays, each  array length is equal to size
// define a new array
// check if size is greater than array.length if true return array
// loop through  each value and increment by size
// using slice method to start at i and end at the size plus i and
// push each value into an array
// return the newest array as the output

function chunk(array, size) {
  var chunked = [];
  if (size > array.length) {
    return array;
  }
  for (var i = 0; i < array.length; i += size) {
    var sliced = array.slice(i, size + i);
    chunked.push(sliced);
  }
  return chunked;
}
