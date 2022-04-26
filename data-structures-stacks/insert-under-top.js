/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const firstValue = stack.peek();
  stack.pop();
  while (stack.push(value) !== undefined) {
    stack.push(value);
  }

  return stack.push(firstValue);
}
