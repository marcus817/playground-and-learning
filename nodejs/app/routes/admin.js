module.exports = function(app){

	app.get('/novanoticia', function(req, res){
		res.render('admin/form_add_noticia');
	});

	app.post('/noticias/salvar', function(req,res){
		let noticia = req.body;
		
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.noticiasDAO(connection);
		
		noticiasModel.salvarNoticia(noticia,function(error, result){
			res.redirect('/noticias');
		});	
	});

};