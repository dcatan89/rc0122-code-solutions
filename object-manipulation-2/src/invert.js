/* exported invert */
// input is an object
// output is the object having inverted values
// declare a new object literal
// declare a for in loop statement and invert the values for the properties and values

function invert(source) {
  var invert = {};
  for (var prop in source) {
    invert[source[prop]] = prop;
  }
  return invert;
}
