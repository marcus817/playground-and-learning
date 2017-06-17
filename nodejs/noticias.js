var http = require('http');

var server = http.createServer(function (req,res){

	var categoria = req.url;

	if(categoria == "/tecnologia"){
		res.end("<html><body>Portal do TI</body></html>");
	}
	else if(categoria =="/financeiro"){
		res.end("<html><body>Portal Financeiro</body></html>");
	}
	else{
		res.end("<html><body>Portal de Noticias</body></html>");	
	}
	
});

server.listen(3000);