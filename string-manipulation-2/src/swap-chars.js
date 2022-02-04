/* exported swapChars */
// input firstIndex (ofString(ofString), string, output is the first and secondIndex switched
// define a variable for the output
// loop and check that at firstindex use a method to switch with secondindex and vice versa
// check if I do not need to use a loop

function swapChars(firstIndex, secondIndex, string) {
  var swappedWord = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedWord += string[secondIndex];
    } else if (i === secondIndex) {
      swappedWord += string[firstIndex];
    } else {
      swappedWord += string[i];
    }
  }
  return swappedWord;
}

// define a new variable to store the output
// for loop statement to check the string
// if the firstIndex is reached replace the value with the value of the secondindex
// if the secondIndex is reached replace the value with the firstIndex value
// otherwise add in the string at each value into the variable
// return the variable as output
