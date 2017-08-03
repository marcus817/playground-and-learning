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
	console.log(req.body.empresa);


	switch(dados.empresa){
		case "1":
		console.log("ADTSA");
		res.render('ADTSA',{dados});
		break;
		case "2":
		console.log("REGENCE");
		res.render('Regence',{dados});
		break;
		case "3":
		console.log("MEIRALINS");
		res.render('meiralins',{dados});
		break;
		case "4":
		console.log("NOVO MUNDO");
		res.render('NovoMundo',{dados});
		break;
		case "5":
		console.log("PIGALLE");
		res.render('PigalleCitroen',{dados});
		break;
		case "6":
		console.log("PGLE");
		res.render('PigallePeugeot',{dados});
		break;
		case "7":
		console.log("SILCAR");
		res.render('Silcar',{dados});
		break;
		case "8":
		console.log("WELLE");
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

	res.send('Criar Sessão');
}