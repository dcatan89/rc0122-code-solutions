/* exported truncate */
// input the legnth of the characters and a string
// output is a shortened version concated wtih an elipsis
// store the output in a variable, can loop and add into the variable until length is reached
// return the output with an elipsis
// start checking for edge cases such as if length is longer than string length

function truncate(length, string) {
  var truncated = '';
  if (length > string.length) {
    return string + '...';
  }
  for (var i = 0; i < length; i++) {
    truncated += string[i];
  }
  return truncated + '...';
}

// define a variable and assign it a value of empty string
//  check if length is larger than string length
// if yes, then return string with added elipsis
// check every character of the string and add it into the new variable
// stop at the given length
// return the variable as output with an added elipsis
