module.exports.jogo = function(application, req, res){
	if(req.session.autorizado !== true){
		var error = [ { param: 'login', msg: 'Você precisa realizar o login! para ter acesso as funcionalidades', value: '' } ];
		res.render('index', {validacao: error});
		
		return;
	}
	
	var usuario = req.session.usuario;
	let casa = req.session.casa;
	var JogoDAO = new application.app.models.JogoDAO();
	
	//console.log(usuario);
	JogoDAO.iniciarJogo(res, usuario, casa);
}

module.exports.sair = function(application, req, res){
	req.session.destroy(function(err){
		res.render('index', {validacao: {}});
	});

}

module.exports.suditos = function(application, req, res){
	
	res.render('aldeoes', {validacao: {}});
}

module.exports.pergaminhos = function(application, req, res){
	res.render('pergaminhos', {validacao: {}});
}

