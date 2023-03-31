const express = require('express');
require('dotenv').config();
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send('Movie app loading..');
  });



app.listen(process.env.port,() => {
    console.log(`Server running on port ${process.env.port}`)
  })