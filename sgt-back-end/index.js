const express = require('express');
const app = express();
const pg = require('pg');

app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const params = [];
  const sql = `
  select *
    from "grades"
    `;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('3000 port Running');
});
