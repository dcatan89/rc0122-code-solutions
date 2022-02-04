/* exported reverseWords */
// input is a string and output is the reverse of every letter of each word
// declare a variable and assign it the value of the string split by space reversed then joined by space
// declare another variable and assign it a value of an empty string;
// declare a for loop in reverse starting from the last letter of the reversed string
// add each value until the iteration is at the last value.
// return the reversed string as the output;

function reverseWords(string) {
  var reverse = string.split(' ').reverse().join(' ');
  var reversedString = '';
  for (var i = reverse.length - 1; i >= 0; i--) {
    reversedString += reverse[i];
  }
  return reversedString;
}
