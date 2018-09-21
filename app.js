var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var index = require('./public/routes/index');
var app = express() ;

//view-engine setup
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session( { secret: "String for encrypting cookies.",
                   resave: false,
                   saveUninitialized: false
}));

app.use('/', index) ;

module.exports = app;

app.listen(3000);





