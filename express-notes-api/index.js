const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.json());

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

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (!data.notes[id]) {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
  } else {
    res.json(data.notes[id]);
  }
}
);
app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('3000 port Running');
});
