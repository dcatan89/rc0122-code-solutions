const express = require('express');
const app = express();
const data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const array = [];
  if (`${data.notes}` === {}) {
    return [];
  }

  for (let prop in data.notes) {
    array.push(prop = data.notes[prop]);
  }
  res.json(array);
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('3000 port Running');
});
