/* exported countdown */
function countdown(number) {
  var numArr = [];
  for (var i = number; i >= 0; i--) {
    numArr.push(i);
  }
  return numArr;
}
