/* exported getLength */

function getLength(list) {
  let count = 1;
  let pointer = list;
  if (list.next === null) {
    return count;
  }
  while (pointer.next !== null) {
    count++;
    pointer = pointer.next;
  }
  return count;
}
