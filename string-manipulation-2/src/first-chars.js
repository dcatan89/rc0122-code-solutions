/* exported firstChars */
// input length (a number) and string, output is the string up to the certain length
// check if length is larger than string length
// Use a for loop to iterate to length
// define a variable to store the output

function firstChars(length, string) {
  var firstChar = '';
  if (length > string.length) {
    return string;
  }

  for (var i = 0; i < length; i++) {
    firstChar += string[i];
  }
  return firstChar;
}

// define a variable and assign it to an empty string;
// check if length is greater than string length
//  if yes, return the string as output
// Otherwise we want to loop through the string up until the length
// add each character into the variable from earlier
// return as output once the loop as ended
