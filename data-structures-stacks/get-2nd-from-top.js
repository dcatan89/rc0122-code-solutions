/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstValuePeek = stack.peek();
  if (firstValuePeek === undefined) {
    return undefined;
  }

  stack.pop();
  const secondValuePeek = stack.peek();
  stack.push(firstValuePeek);

  if (secondValuePeek === undefined) {
    return undefined;
  }

  return secondValuePeek;
}
