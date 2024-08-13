const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Create an express app
const app = express();
app.use(express.json());

// Use the cors middleware
app.use(cors());

// serve static files
// app.use(express.static('public'));

// Define a route
app.get('/card', (req, res) => {
  try {
    const file = fs.readFileSync(path.join(__dirname, `Data.json` ), null, 2);
    const response = JSON.parse(file);
    console.log(response); // Log the response to the console
    res.status(200).send(response);
  } catch (error) {
    console.error('Error reading or parsing file:', error); // Log the error
    res.status(500).send({ error: 'Internal Server Error' }); // Send 500 status with an error message
  }
});
app.post('/edit', (req, res) => {
  try {
    console.log('received');
    console.log(JSON.parse(req));
    // const id = JSON.parse(req.body.id);
    // console.log(id);
    fs.writeFileSync(path.join(__dirname, `hello.json`), '{"message": "Hello World"}');
    res.send('{"message": "Hello World"}');
  } catch (err) {
    res.status(500).send({ error: 'Error occurred while updating the file' });
  }
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});