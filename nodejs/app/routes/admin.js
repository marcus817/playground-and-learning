module.exports = function(app){

	app.get('/novanoticia', function(req, res){
		res.render('admin/form_add_noticia');
	});

	app.post('/noticias/salvar', function(req,res){
		let noticia = req.body;
		
		req.assert('titulo','').notEmpty();
		req.assert('noticia','').len(10,100);
		req.assert('resumo','').notEmpty();
		req.assert('autor','').notEmpty();
		req.assert('data_noticia','').isDate({format: 'YYYY-MM-DD'});

		let errors = req.validationErrors();

		if (errors){
			res.redirect('/novanoticia');
			return;
		}
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.noticiasDAO(connection);
		
		noticiasModel.salvarNoticia(noticia,function(error, result){
			res.redirect('/noticias');
		});	
	});

};