	var htmlConvert = require('html-convert');
var fs = require('fs');


module.exports.index = function(application, req, res){
	res.render('index', {validacao:[]});
}

module.exports.assinatura = function(application, req, res){
	res.render('cadastrooutass', {validacao:[]});
}

module.exports.assinar = function(application, req, res){
	var dados = req.body;
	
	req.assert('nome','Nome do colaborador não pode ser vazio').notEmpty();
	req.assert('email', 'Necessario informa o seu e-mail').notEmpty();
	req.assert('email', 'insira um e-mail valido').isEmail();
	//req.assert('fone1', 'Informe seu telefone seu ramal direto (DDD) XXXX-XXXX').len(11, 11);
	//req.assert('fone2', 'Informe seu telefone com (DDD) XXXX-XXXX').len(11, 11);

	var erros = req.validationErrors();
	if(erros){
		res.render("cadastrooutass", {validacao:erros});
		return;
	}

	switch(dados.empresa){
		case "1":
		res.render('ADTSA',{dados});
		break;
		case "2":
		res.render('Regence',{dados});
		break;
		case "3":
		res.render('meiralins',{dados});
		break;
		case "4":
		res.render('NovoMundo',{dados});
		break;
		case "5":
		res.render('PigalleCitroen',{dados});
		break;
		case "6":
		res.render('PigallePeugeot',{dados});
		break;
		case "7":
		res.render('Silcar',{dados});
		break;
		case "8":
		res.render('Welle',{dados});
		break;

	}
	
	
}


module.exports.geraPNG = function(application, req, res){
	
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

	var connection = application.config.dbConnection();
	var UsuariosDAO = new application.app.models.UsuarioDAO();
	UsuariosDAO.autenticar(dadosForm, req, res);


	//res.send('Criar Sessão');
}