const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Redirect all requests to index.js
app.use((req, res, next) => {
  console.log('Redirecting request to index.js');
  require('./index');
  next();
});

// Start listening on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});