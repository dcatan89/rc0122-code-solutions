/* exported yakko, wakko, dot */
var warnerProtoType = {
  describe: function () {
    var description = this.name + ' is a ' +
    this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};

var yakko = {
  age: 14,
  name: 'Yakko',
  role: 'brother'
};

var wakko = {
  age: 11,
  name: 'Wakko',
  role: 'brother'

};

var dot = {
  age: 10,
  name: 'Dot',
  role: 'sister'
};

Object.setPrototypeOf(yakko, warnerProtoType);
Object.setPrototypeOf(wakko, warnerProtoType);
Object.setPrototypeOf(dot, warnerProtoType);
