var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('private route hit');
    next();
  },
  logger: function(req, res, next) {
    console.log('Reqest: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

app.use(middleware.requireAuthentication);
app.use(middleware.logger);


app.get('/about', function(req, res) {
  res.send('About FDTR Static Table API');
});
app.use(express.static(__dirname + '/public'));


app.listen(PORT, function() {
  console.log('express server started on port ' + PORT);
});
