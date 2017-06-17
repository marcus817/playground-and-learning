var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("<html><body>Portal de Noticias</body></html>");
});

app.get('/ti', function(req, res){
	res.send("<html><body>Portal do TI</body></html>");
});

app.listen(3000, function(){
	console.log('Servidor no ar!');
});