/* exported removeTail */

function removeTail(list) {
  let pointer = list;
  if (list.next === null) {
    return list;
  }
  while (pointer.next.next !== null) {
    pointer = pointer.next;
  }
  pointer.next = null;

  return list;
}
