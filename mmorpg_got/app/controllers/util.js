module.exports.validaUsuario = function (application, req, res) {
	if(req.session.autorizado !== true){
		var error = [ { param: 'login', msg: 'Você precisa realizar o login! para ter acesso as funcionalidades', value: '' } ];
		res.render('index', {validacao: error, jogo: {}});
		return;
	}else {
		return true;
	}
}