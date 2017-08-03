module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});

	application.post('/autenticar', function(req, res){
		application.app.controllers.index.autenticar(application, req, res);
	});

	application.get('/assinatura', function(req, res){
		application.app.controllers.index.assinatura(application, req, res);
	});

	application.post('/assinar', function(req, res){
		application.app.controllers.index.assinar(application, req, res);
	});

	application.post('/gerapng', function(req, res){
		//application.app.controllers.index.geraPNG(application, req, res);
		console.log("Chegou Aqui");
		console.log(req);
		console.log("Chegou Aqui");
	})
}