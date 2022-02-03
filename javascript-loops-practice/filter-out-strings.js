/* exported filterOutStrings */
function filterOutStrings(values) {
  var ogArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof 'string') {
      ogArr.push(values[i]);
    }
  }
  return ogArr;
}
