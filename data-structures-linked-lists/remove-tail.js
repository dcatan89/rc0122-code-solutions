/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return list;
  }
  list.next.next.next = null;
}
