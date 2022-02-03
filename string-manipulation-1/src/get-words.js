/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  var words = string.split(' ');
  return words;

}
