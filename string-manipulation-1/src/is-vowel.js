/* exported isVowel */
function isVowel(char) {
  var vowel = char.toLowerCase();
  if (vowel === 'u' || vowel === 'o' || vowel === 'i' || vowel === 'a' || vowel === 'e') {
    return true;
  } else {
    return false;
  }
}
