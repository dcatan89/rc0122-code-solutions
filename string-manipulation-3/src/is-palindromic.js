/* exported isPalindromic */
// input string output is boolean whether or not it is a palindromej
// declare a variable and assign it an empty string
// split by space and then join without space the original string and assign it to a new variable
// declare a for loop and run from string length decrement it to zero
// add each value to the empty string and assign the result to the variable
// check to see if the string and the new variable are equal
// if true return that boolean else return false;

function isPalindromic(string) {
  var reversed = '';

  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  var $reversed = reversed.split(' ').join('');
  var $newString = string.split(' ').join('');

  if ($reversed === $newString) {
    return true;
  } else {
    return false;
  }

}
