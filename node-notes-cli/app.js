const fs = require('fs');
const json = require('./data.json');
const action = process.argv[2];

const read = JSON.stringify(json, null, 2);

if (action === 'read') {
  console.log(read);
} else if (action === 'add') {
  const note = process.argv[3];
  json.notes[json.nextId++] = note;
  fs.writeFile('data.json', `${JSON.stringify(json, null, 2)}`, err => {
    if (err) throw err;
  }
  );
} else if (action === 'update') {
  const update = process.argv[3];
  json.notes[update] = process.argv[4];
  fs.writeFile('data.json', `${JSON.stringify(json, null, 2)}`, err => {
    if (err) throw err;
  }
  );
} else if (action === 'delete') {
  const vanish = process.argv[3];
  delete json.notes[vanish];
  fs.writeFile('data.json', `${JSON.stringify(json, null, 2)}`, err => {
    if (err) throw err;
  }
  );
}
