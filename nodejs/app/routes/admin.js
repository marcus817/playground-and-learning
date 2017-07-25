module.exports = function(app){

	app.get('/novanoticia', function(req, res){
		app.app.controllers.admin.novanoticia(app,req,res);
	});

	app.post('/noticias/salvar', function(req,res){
		app.app.controllers.admin.salvar_noticia(app,req,res);	
	});

};