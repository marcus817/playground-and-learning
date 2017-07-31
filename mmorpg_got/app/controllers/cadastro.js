module.exports.cadastro = function(application, req, res){
	res.render('cadastro');
}

module.exports.cadastrar = function(application, req, res){
	var dadosForm = req.body;
	req.assert('nome', 'Nome não pode ser Vazio').notEmpty();
	req.assert('usuario', 'Usuario não pode ser Vazio').notEmpty();
	req.assert('senha', 'Senha não pode ser Vazio').notEmpty();
	req.assert('casa', 'Casa deve ser selecionada').notEmpty();
	console.log(dadosForm);
}