/* exported equal */
// input first(array) and second(array)
// output boolean whether each is equal index for index;
// check if lengths are the same, if not then return false
// declare a for loop to run the length of either array
// check if through all indexes to see if they are not the same
// for the first one that is not the same return false as the output
// otherwise return true from the function

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
