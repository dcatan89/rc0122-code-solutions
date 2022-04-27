/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let currentPointer = list;
  const a = new LinkedList(value);
  a.next = null;
  if (list === null) {
    return a;
  }

  while (currentPointer.next !== null) {
    currentPointer = currentPointer.next;
  }
  currentPointer.next = a;
  a.next = null;
}
