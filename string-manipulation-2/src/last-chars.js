/* exported lastChars */
// input is  length(number) and string, output the last characters of the string starting from length
// need to store the output so define a new variable
// have a check for edge case length> string length
// for loop starting from length up until string length

function lastChars(length, string) {
  var lastChar = '';
  if (length > string.length) {
    return string;
  }
  for (var i = string.length - length; i < string.length; i++) {
    lastChar += string[i];
  }
  return lastChar;
}
