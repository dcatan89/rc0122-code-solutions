/* exported maxValue */

function maxValue(stack) {
  let largestValue = stack.peek();
  if (stack.peek() === undefined) {
    return -Infinity;
  }

  while (stack.peek() !== undefined) {
    if (stack.peek() > largestValue) {
      largestValue = stack.peek();
    }
    stack.pop();
  }

  return largestValue;
}
