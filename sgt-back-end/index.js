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
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const student = req.body;
  student.score = parseInt(student.score);
  if (student === 'undefined' || !Number.isInteger(student.score) ||
    student.score > 100 || student.score < 0 ||
    (student.name || student.course || student.score) === 'undefined') {
    res.status(400).json({
      error: 'Content must include valid course, name, and score'
    });
    return;
  }
  const params = [
    student.name,
    student.course,
    student.score
  ];
  const sql = `
  insert into "grades"("name", "course", "score")
  values($1, $2, $3)
  returning *;
  `;
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    }
    )
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const student = req.body;
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'GradeId must be a positive integer'
    });
    return;
  }

  student.score = parseInt(student.score);
  if (student === 'undefined' || !Number.isInteger(student.score) ||
    student.score > 100 || student.score < 0 ||
    (student.name || student.course || student.score) === 'undefined') {
    res.status(400).json({
      error: 'Content must include valid course, name, and score'
    });
    return;
  }

  const params = [
    student.name,
    student.course,
    student.score
  ];
  const sql = `
  update "grades"
    set name=$1, course=$2, score=$3
    where "gradeId" = ${gradeId}
  returning *
  `;

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
        return;
      }
      res.json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('3000 port Running');
});
