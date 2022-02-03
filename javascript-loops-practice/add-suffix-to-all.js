/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArr = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    newArr.push(newWord);
  }
  return newArr;
}
