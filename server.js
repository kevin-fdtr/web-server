var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware/');

app.use(middleware.requireAuthentication);
app.use(middleware.logger);


app.get('/about', function(req, res) {
  res.send('About FDTR Static Table API!');
});
app.use(express.static(__dirname + '/public'));


app.listen(PORT, function() {
  console.log('express server started on port ' + PORT);
});
