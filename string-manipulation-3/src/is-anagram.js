/* exported isAnagram */
// input firstString and secondstring
// output is a boolean
// somehow erase the spaces if there are any between

function isAnagram(firstString, secondString) {
  var firstWord = firstString.split('').sort().join('');
  var secondWord = secondString.split('').sort().join('');

  if (firstWord === secondWord) {
    return true;
  } else {
    return false;
  }
}
