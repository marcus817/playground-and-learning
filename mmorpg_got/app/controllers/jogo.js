module.exports.jogo = function(application, req, res){
	application.app.controllers.util.validaUsuario(application, req, res);
	
	let comando_invalido = 'N';
	if(req.query.comando_invalido == 'S'){
		comando_invalido = 'S';
	}
	var usuario = req.session.usuario;
	let casa = req.session.casa;
	var JogoDAO = new application.app.models.JogoDAO();
	
	//console.log(usuario);
	JogoDAO.iniciarJogo(res, usuario, casa, comando_invalido);
}

module.exports.sair = function(application, req, res){
	

	req.session.destroy(function(err){
		res.render('index', {validacao: {}});
	});

}

module.exports.suditos = function(application, req, res){
	application.app.controllers.util.validaUsuario(application, req, res);
	res.render('aldeoes', {validacao: {}});
}

module.exports.pergaminhos = function(application, req, res){
	application.app.controllers.util.validaUsuario(application, req, res);
	res.render('pergaminhos', {validacao: {}});
}

module.exports.ordenar_acao_sudito = function(application, req, res){
	application.app.controllers.util.validaUsuario(application, req, res);	

	let dadosForm = req.body;
	
	req.assert('acao', 'Ação deve ser informada').notEmpty();
	req.assert('quantidade', 'Quantidade deve ser informada').notEmpty();

	let erros = req.validationErrors();

	if(erros){
		res.redirect('jogo?comando_invalido=S');
		return; 
	}

	res.send('tudo ok');
}

