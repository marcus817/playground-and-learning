module.exports.novanoticia = function (app, req, res) {
	res.render('admin/form_add_noticia', {errors:{}, noticia:{}});
}

module.exports.salvar_noticia = function(app, req, res){
		let noticia = req.body;
		
		req.assert('titulo','O titulo não pode está vazio!').notEmpty();
		req.assert('noticia','Atenção a noticia deve conter no minimo 10 caracteres e 100 no máximo').len(10,100);
		req.assert('resumo','Insira um resumo').notEmpty();
		req.assert('autor','Informe o autor').notEmpty();
		req.assert('data_noticia','Digite a data da Noticia').isDate({format: 'YYYY-MM-DD'});

		let errors = req.validationErrors();


		console.log(errors);

		if (errors){
			res.status(400).render('admin/form_add_noticia', {errors: errors, noticia: noticia});
			return;
		}
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.noticiasDAO(connection);
		
		noticiasModel.salvarNoticia(noticia,function(error, result){
			res.redirect('/noticias');
		});
}