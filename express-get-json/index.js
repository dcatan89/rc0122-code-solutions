const express = require('express');
const app = express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const array = [];

for (const property in grades) {
  array.push(grades[property]);
}

JSON.stringify(array);

app.get('/api/grades', (req, res) => {
  res.send(array);
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Server Running');
});
