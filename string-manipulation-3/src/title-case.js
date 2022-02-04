/* exported titleCase */
// input a string representing a book using APA style.
// Capitalize the first word of every major word
// minor words are lowercased unless it is the first word in title
// The second word of a hypen is also capitalized.

function titleCase(title) {
  var split = title.toLowerCase().split(' ');
  for (var i = 0; i < split.length; i++) {
    if ((split[i] === 'in' || split[i] === 'the' || split[i] === 'of' || split[i] === 'on' || split[i] === 'to' ||
      split[i] === 'per' || split[i] === 'by' || split[i] === 'in' || split[i] === 'for' || split[i] === 'as' || split[i] === 'at' ||
      split[i] === 'a' || split[i] === 'an' || split[i] === 'and' || split[i] === 'or' || split[i] === 'nor' || split[i] === 'but') && i !== 0) {
      split[i].toLowerCase();
    } else if
    (split[i] === 'javascript') {
      split[i] = 'JavaScript';
    } else
    if (split[i] === 'javascript:') {
      split[i] = 'JavaScript:';
    } else
    if (split[i] === 'api') {
      split[i] = 'API';
    } else {
      split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }
  }
  split = split.join(' ');
  var splitColon = split.split(':');
  for (var j = 0; j < splitColon.length; j++) {
    if (splitColon[j].charAt(0) === ' ') {
      splitColon[j] = ' ' + splitColon[j].charAt(1).toUpperCase() + splitColon[j].slice(2);
    }
    splitColon[j] = splitColon[j].charAt(0).toUpperCase() + splitColon[j].slice(1);
  }
  split = splitColon.join(':');
  var splitHyphen = split.split('-');
  for (var k = 0; k < splitHyphen.length; k++) {
    splitHyphen[k] = splitHyphen[k].charAt(0).toUpperCase() + splitHyphen[k].slice(1);
  }
  split = splitHyphen.join('-');

  return split;
}

// declare a variable and assign it the value of the string lowercased and split by spaces
// declare a for loop and check for edge cases that lowercases conjunctions, articles and prepositions
// checks for Javascript and API words to hard code and uppercases the first letter of every value that isn't true for edge cases
//  Use the join method and assign it to the variable created earlier
// create a new variable Splitcol and assign it the value of the split method by colon
//  declare a for loop to capitalize the value of the first character of each value
// assign the join method by colon to the variable created from the beginning which is split
// declare a new variable and assign it the value of the split method of the split object with a argument of hyphen
// declare a for loop and use the same conditions as the colon except switching it out with the hyphen;
// use the join method on the splitHypen variable and assign it to the split variable from the beginning
// return split from the function;
