module.exports.jogo = function(application, req, res){
	var autoriza = application.app.controllers.util.validaUsuario(application, req, res);
	var usuario = req.session.usuario;
	let casa = req.session.casa;
	var JogoDAO = new application.app.models.JogoDAO();
	let msg = '';

	if(req.query.msg != ''){
		msg = req.query.msg;
	}

	if(autoriza == true){
		JogoDAO.iniciarJogo(res, usuario, casa, msg);
	}

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
	
	
	let usuario = req.session.usuario;
	let jogoDAO = new application.app.models.JogoDAO();

	jogoDAO.getAcoes(usuario, res);
}

module.exports.ordenar_acao_sudito = function(application, req, res){
	application.app.controllers.util.validaUsuario(application, req, res);	

	let dadosForm = req.body;
	
	req.assert('acao', 'Ação deve ser informada').notEmpty();
	req.assert('quantidade', 'Quantidade deve ser informada').notEmpty();

	let erros = req.validationErrors();

	if(erros){
		res.redirect('jogo?msg=S');
		return; 
	}

	let date = new Date();
	let tempo= null;

	switch(parseInt(dadosForm.acao)){
		case 1: tempo = 1 * 60 * 60000; break;
		case 2: tempo = 2 * 60 * 60000; break;
		case 3: tempo = 3 * 60 * 60000; break;
		case 5: tempo = 4 * 60 * 60000; break;
	}
	let jogoDAO = new application.app.models.JogoDAO();
	dadosForm.usuario = req.session.usuario;
	dadosForm.acao_termina_em = date.getTime() + tempo;
	jogoDAO.acao(dadosForm);

	res.redirect('jogo?msg=B');
}

