/* exported capitalizeWords */
// input is a string, output is string with every first letter of word capitalized
// split words and caplitalize the first letter then take the new words and join them as output

function capitalizeWords(string) {
  var split = string.split(' ');
  var capitalArr = [];
  for (var i = 0; i < split.length; i++) {
    var newWord = split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase();
    capitalArr.push(newWord);
  }
  return capitalArr.join(' ');
}

// Assign the splitmethod of the string to a new variable split
// assign an empty array literal to a new variable (capitalArr)
// loop through the array and capitalize the first letter and lowercase the rest and assign it to a new variable
// then push it into a new array
// return the new array after joining the array back into a string as the output
