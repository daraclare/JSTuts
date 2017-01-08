const express = require('express');
const app = express();
const open = require('open');
const port = 4000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
  console.log(`running on port ${port}`);
});

app.get('/dara', function (req, res) {
  res.sendFile(__dirname + '/dara.html');
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/about.html');
});

//serve static files
app.use(express.static('public'));

//start up express
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
