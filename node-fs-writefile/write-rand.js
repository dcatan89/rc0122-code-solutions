const fs = require('fs');
const randomNum = Math.random();
const data = new Uint8Array(Buffer.from(`${randomNum}\n`));

fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
