const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs
.command('add', 'Add a new note', {
title: titleOptions,
body:  bodyOptions

})
.command('List', 'List all notes')
.command('read', 'Read a note' , {
  title: titleOptions
})
.command('remove', 'Removing note', {
  title: titleOptions

})
.help()
.argv;
const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command:',  command);
console.log('Yargs', argv);

if (command === 'add') {

var note = notes.addNote(argv.title, argv.body);

} else if (command === 'list') {

var allNotes =  notes.getAll();
console.log(`Printing ${allNotes.length} note(s).`);
allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {

  var note = notes.readNote(argv.title);

  if (note) {

    console.log('Note found');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note not found');
  }
}
  else if (command === 'remove') {

noteRemoved = notes.removeNote(argv.title);

var message = noteRemoved ? 'Note was removed' : 'Note not found';
console.log(message);
  }
else {

  console.log('Command not recognized');

}
