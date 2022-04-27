/* exported includes */

function includes(list, value) {
  const a = list;
  while (list.next !== null) {
    if (list.data === value) {
      list = a;
      return true;
    }
    list = list.next;
  }

  if (list.data === value) {
    return true;
  }

  return false;

}
