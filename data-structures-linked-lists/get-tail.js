/* exported getTail */

function getTail(list) {
  let pointer = list;
  while (pointer.next != null) {
    pointer = pointer.next;
  }
  return pointer.data;
}
