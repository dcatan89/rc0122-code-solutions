/* exported getStudentNames */
function getStudentNames(students) {
  var nameArr = [];
  for (var i = 0; i < students.length; i++) {
    var studentName = students[i].name;
    nameArr.push(studentName);
  }
  return nameArr;
}
