var express = require('express');
var consign= require('consign');
var bodyParser = require('body-parser');
var expresValidator = require('express-validator');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expresValidator());

consign()
	.include('./app/routes')
	.then('./config/dbConnection.js')
	.then('./app/models')
	.then('./app/controllers')
	.into(app);



module.exports = app;