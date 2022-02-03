/* exported oddOrEven */
function oddOrEven(numbers) {
  var evenOddsArr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenOddsArr.push('even');
    } else {
      evenOddsArr.push('odd');
    }
  }
  return evenOddsArr;
}
