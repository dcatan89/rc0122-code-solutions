/* exported numVowels */
// input is a string, output is the number of vowels
// loop through the string length and increment a count for each vowel
// the number will be the output

function numVowels(string) {
  var count = 0;
  var lowerCased = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (lowerCased[i] === 'a' || lowerCased[i] === 'e' || lowerCased[i] === 'i' ||
      lowerCased[i] === 'o' || lowerCased[i] === 'u') {
      count++;
    }
  }
  return count;
}
