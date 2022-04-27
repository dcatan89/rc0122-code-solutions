/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const prepends = new LinkedList(value);
  prepends.next = list;
  return prepends;
}
