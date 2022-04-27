/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const inserted = new LinkedList(value);
  inserted.next = list.next;
  list.next = inserted;
}
