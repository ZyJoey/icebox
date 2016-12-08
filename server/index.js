'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var route = require('./routes/route');
var config = require('./config/config.json');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'))
app.use(cors());

app.listen(config.app, function () {
  console.log('server is on port on ' + config.app)
})

route(app)
