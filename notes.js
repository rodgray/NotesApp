const fs = require('fs');


var fetchNotes = () => {
  try {

    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);

  } catch (e) {
    return [];
  }


};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = function(title, body) {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

try {

  var noteString = fs.readFileSync('notes-data.json');
  notes = JSON.parse(noteString);

} catch (e) {

}

var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
  notes.push(note);
  saveNotes(notes);
  }

};

var getAll = () => {
return fetchNotes();
};

var readNote = (title) => {
var notes = fetchNotes();
var filteredNotes = notes.filter((note) => note.title === title);
return filteredNotes[0];
};

var removeNote = (title) => {
var notes = fetchNotes();
var filteredNotes = notes.filter((note) => note.title !== title);
saveNotes(filteredNotes);

return notes.length !== filteredNotes.length;


};

var logNote = (note) => {
  console.log('--');
  console.log(`title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
  logNote
};
