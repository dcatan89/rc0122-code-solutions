const fs = require('fs');

const note = process.argv[2];
const copied = process.argv[3];

fs.readFile(note, (err, data) => {
  if (err) throw err;
  fs.writeFile(copied, `${data}`, err => {
    if (err) throw err;
  });
});
