/* exported takeSmaller */

function takeSmaller(queue) {
  const firstValue = queue.dequeue();
  if (firstValue === undefined) {
    return undefined;
  }
  if (queue.peek() === undefined) {
    return firstValue;
  }
  const secondValue = queue.dequeue();
  if (secondValue >= firstValue) {
    queue.enqueue(secondValue);
    return firstValue;
  }

  queue.enqueue(firstValue);

  return secondValue;
}
