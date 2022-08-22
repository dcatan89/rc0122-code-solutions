/* exported capitalize */
// To not mutate the original word create a variable and initialize to an empty string
// Take the given string, then you want to itterate through the letters
// only capitalize the first letter of the string
// return the first letter concat with the rest of the word

function capitalize(word) {
  let newString = '';
  const firstLetter = word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    newString += word[i];
  }

  return firstLetter + newString.toLowerCase();
}
