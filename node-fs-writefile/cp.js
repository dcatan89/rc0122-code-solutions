const fs = require('fs');

const note = process.argv[2];
const copied = process.argv[3];

fs.readFile(note, (err, data) => {
  if (err) throw err;
  const content = new Uint8Array(Buffer.from(`${data}`));
  fs.writeFile(copied, content, err => {
    if (err) throw err;
  });
});
