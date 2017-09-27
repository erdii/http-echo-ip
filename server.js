var express = require('express');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',

var app = express();

app.set("trust proxy", true);

app.get('/', function (req, res) {
  res.send(req.ip);
});

var server = app.listen(port, ip, function () {
  console.log('app listening at http://%s:%s', ip, port);
});

