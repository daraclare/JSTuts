const express = require('express');
const app = express();
const open = require('open');
const port = 4000;

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log(`running on port ${port}`);
});

//start up express
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
