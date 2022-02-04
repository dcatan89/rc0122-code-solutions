/* exported isAnagram */
// input firstString and secondstring
// output is a boolean
// somehow erase the spaces if there are any between
// sort both strings in a certain order to check if they both match
// if they do not strictly match then it is false otherwise it is true

function isAnagram(firstString, secondString) {
  var firstWord = firstString.split('').sort().join('');
  var secondWord = secondString.split('').sort().join('');

  if (firstWord.split(' ').join('') === secondWord.split(' ').join('')) {
    return true;
  } else {
    return false;
  }
}
