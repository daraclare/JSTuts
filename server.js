const express = require('express');
const path = require('path');
const app = express();
const open = require('open');
const port = 4000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
  console.log(`running on port ${port}`);
});

//serve static files
app.use(express.static(path.join(__dirname, '/public')));

//start up express
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
