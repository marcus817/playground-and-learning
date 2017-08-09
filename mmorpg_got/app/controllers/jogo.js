module.exports.jogo = function(application, req, res){
	if(req.session.autorizado !== true){
		var error = [ { param: 'login', msg: 'Você precisa realizar o login! para ter acesso as funcionalidades', value: '' } ];
		res.render('index', {validacao: error});
		
		return;
	}
	res.render('jogo',{img_casa: req.session.casa});
	var usuario = req.session.usuario;
	var JogoDAO = new application.app.models.JogoDAO();
	
	//console.log(usuario);
	JogoDAO.iniciarJogo(usuario);
}

module.exports.sair = function(application, req, res){
	req.session.destroy(function(err){
		res.render('index', {validacao: {}});
	});

}