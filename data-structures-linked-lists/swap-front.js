/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const a = list.next;
  list.next = list.next.next;
  a.next = list;
  return a;
}
