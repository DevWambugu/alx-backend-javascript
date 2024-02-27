// 4-http.js
// import the http module
const http = require('http');

const localHost = 'localhost';
const port = 1245;
// Create the server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // write the response with the recommneded response.
  res.end('Hello Holberton School!');
});

// Set the app to listen on port 1245
app.listen(port, localHost, () => {
  console.log(`Server running at http://${localHost}:${port}/`);
});
// Export the app variable

module.exports = app;
