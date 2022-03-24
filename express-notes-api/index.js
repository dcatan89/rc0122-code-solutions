const fs = require('fs');
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
});

app.post('/api/notes', (req, res) => {
  const note = req.body;
  if (!note.content) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }

  note.id = data.nextId;
  data.notes[data.nextId] = note;
  data.nextId++;

  fs.writeFile('data.json', `${JSON.stringify(data, null, 2)}`, err => {
    if (err) {
      console.error(res.status(500).json({
        error: 'An unexpected error occurred.'
      })
      );
    } else {
      res.status(201).send(note);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  if (!data.notes[id]) {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
    return;
  }

  delete data.notes[id];
  fs.writeFile('data.json', `${JSON.stringify(data, null, 2)}`, err => {
    if (err) {
      console.error(res.status(500).json({
        error: 'An unexpected error occurred.'
      })
      );
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const note = req.body;
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 0 || !note.content) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }

  if (!data.notes[id]) {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
    return;
  }

  data.notes[id].content = note.content;
  fs.writeFile('data.json', `${JSON.stringify(data, null, 2)}`, err => {
    if (err) {
      console.error(res.status(500).json({
        error: 'An unexpected error occurred.'
      })
      );
    } else {
      res.send(data.notes[id]);
    }
  });

});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('3000 port Running');
});
