module.exports.index = function(application, req, res){
	res.render('index', {validacao:[]});
}

module.exports.assinatura = function(application, req, res){
	res.render('cadastrooutass', {validacao:[]});
}

module.exports.assinar = function(application, req, res){
	var dados = req.body;
	console.log(dados);

	res.render('meiralins',{dados});
}


module.exports.autenticar = function(application, req, res){
	let dadosForm = req.body;
	req.assert('usuario', 'Usuario não pode ser vazio').notEmpty();
	req.assert('senha', 'Senha não pode ser vazia').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("index", {validacao:erros});
		return;
	}

	res.send('Criar Sessão');
}