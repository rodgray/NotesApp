// var obj = {
//   name: 'Roderick'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name":"Roderick","age": 22}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person)

const fs = require('fs');

var orginalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(orginalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var noteStringObj = JSON.parse(noteString);
console.log(typeof noteStringObj);
console.log(noteStringObj.title);
