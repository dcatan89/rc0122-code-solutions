const express = require('express');
const app = express();

let nextId = 1;
let grades = {};
const array = [];
app.get('/api/grades', (req, res, next) => {
  res.json(array);
  next();
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades = req.body;
  grades.id = nextId;
  array.push(grades);
  nextId++;
  res.status(201).send(grades);
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 running');
});
