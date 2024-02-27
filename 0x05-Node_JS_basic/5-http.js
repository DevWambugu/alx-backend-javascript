// 5-http.js
// import the http module and readfile async function
const http = require('http');
const countStudents = require('./3-read_file_async');

const localHost = 'localhost';
const port = 1245;
// Create the server using first case

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      // res.statusCode = 404;
      // write the response with the recommneded response.
      res.end('Cannot load the database');
    });
  }
});

// Set the app to listen on port 1245
app.listen(port, localHost, () => {
  console.log(`Server running at http://${localHost}:${port}/`);
});
// Export the app variable

module.exports = app;
