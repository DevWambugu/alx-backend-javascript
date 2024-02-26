// 4-http.js
// import the http module
const http = require('http');
// Create the server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // write the response with the recommneded response.
  res.end('Hello Holberton School!\n');
});

// Set the app to listen on port 1245
app.listen(1245, 'localhost', () => {
  console.log('Server running at http://0.0.0.0:1245/');
});
// Export the app variable

module.exports = app;
