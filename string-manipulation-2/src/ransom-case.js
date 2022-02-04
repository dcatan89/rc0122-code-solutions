/* exported ransomCase */
// input is string, output is every other letter is uppercased;
// it goes lowercase uppercase so lowercase the string and store into a new variable
// loop through the variable starting from index one and up by two indexes and capitalize
// return the word as output

function ransomCase(string) {
  var ransomed = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomed += string[i].toLowerCase();
    } else {
      ransomed += string[i].toUpperCase();
    }
  }
  return ransomed;
}

// define a new variable and assign it to an empty string
// run a loop through the string and check if the index is an even number,
// if yes, then lowercase the letter and add it to the new variable
// else add an uppercase letter to the new variable
// return the the variable as output
