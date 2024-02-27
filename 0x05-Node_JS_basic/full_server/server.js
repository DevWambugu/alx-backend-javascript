// create a small Express server
// It should use the routes defined in full_server/routes/index.js
// It should use the port 1245
const express = require('express');
const app = express();
const routes = require('./routes');

const port = 1245;

// Use the routes defined in full_server/routes/index.js
app.use(routes);

// Start the server on port 1245
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;