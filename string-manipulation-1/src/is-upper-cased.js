/* exported isUpperCased */
// Check if word all capitalized is the same as input given
// return true if so, else return false
function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  } else {
    return false;
  }
}
