/* exported capitalizeWord */
// input is a string, output is the word with only the first one capitalized
// check if string is the word JavaScript and return the input if so
// capitalize the first letter and lowercase the rest

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// check if input is JavaScript , if yes return JavaScript
// return the output of the first letter of string capital and the rest is lowercase.
