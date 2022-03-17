const fs = require('fs');

const note = process.argv[2];
const data = new Uint8Array(Buffer.from(`${note}`));

fs.writeFile('note.txt', data, err => {
  if (err) throw err;
});
