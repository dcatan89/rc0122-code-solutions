/* exported capitalize */

function capitalize(word) {
  var newString = '';
  for (var i = 1; i < word.length; i++) {
    newString += word[i];
  }
  return word[0].toUpperCase() + newString.toLowerCase();
}
