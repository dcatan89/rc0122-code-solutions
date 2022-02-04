/* exported defaults */
// input two parameters both objects
// output no return value however target object is modified
// check to see if target is an empty object literal if true return source as the output
// check to see if source is an empty object literal if true return target as the output
// declare a for in loop to run through all properties in source and if there are properties that do not exist in target
// add the key and values to the target object
// return the target object as the output

function defaults(target, source) {
  if (source === {}) {
    return target;
  }

  if (target === {}) {
    return source;
  }

  for (var prop in source) {
    if (!target[prop] && target[prop] !== null) {
      target[prop] = source[prop];
    }
  }
  return target;
}
