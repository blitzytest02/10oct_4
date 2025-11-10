// Import Express.js framework
const express = require('express');

// Initialize Express application
const app = express();

// Configuration: Port with environment variable support
const PORT = process.env.PORT || 3000;

// Route: GET /hello
// Returns: "Hello world" as plain text
app.get('/hello', (req, res) => {
  res.type('text/plain');
  res.send('Hello world');
});

// Route: GET /evening
// Returns: "Good evening" as plain text
app.get('/evening', (req, res) => {
  res.type('text/plain');
  res.send('Good evening');
});

// Start server and listen on configured port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
