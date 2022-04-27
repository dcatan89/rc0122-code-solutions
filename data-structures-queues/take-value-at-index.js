/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let count = 0;
  let value;
  const firstValue = queue.dequeue();
  if (firstValue === undefined) {
    return undefined;
  }
  if (queue.peek() === undefined) {
    return firstValue;
  }
  queue.enqueue(firstValue);

  while (count !== index) {
    count++;
    if (index === count) {
      value = queue.dequeue();
      return value;
    }
    value = queue.dequeue();
    queue.enqueue(value);
  }

  return value;
}
