const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    const outString = output.slice(0, -1);
    res.send(`This is the list of our students\n${outString}`);
  })
    .catch(() => {
      res.send('Cannot load the database');
    });
});

app.listen(port);

module.exports = app;
