var mongo = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/got';


function JogoDAO(){
	//this._connection = connection();
}


JogoDAO.prototype.iniciarJogo = function(res, usuario, casa, msg){
	mongo.connect(url, function(err, db){
		assert.equal(null, err);

		db.collection('jogos').find({usuario: usuario}).toArray(function(err, result){
			
			res.render('jogo',{img_casa: casa, jogo: result[0], msg : msg});
			return;
		});
		db.close();
		 

	});

	
	
}

JogoDAO.prototype.gerarParametros = function(usuario) {
	mongo.connect(url, function(err, db){
		assert.equal(null, err);
		db.collection('jogos').insertOne({
				usuario : usuario,
				moeda: 20,
				suditos: 10,
				temor: Math.floor(Math.random()*1000),
				sabedoria: Math.floor(Math.random()*1000),
				comercio: Math.floor(Math.random()*1000),
				magia:Math.floor(Math.random()*1000)
			}, function(err, result){
				assert.equal(null, err);
				console.log('Jogo Cadastrado');
				db.close();
		});
	});
};

JogoDAO.prototype.acao = function (acao){
	
	mongo.connect(url, function(err, db){
		assert.equal(null, err);
		
		db.collection('acao').insert(acao, function(err, result){
				assert.equal(null, err);
				console.log('Acao Cadastrada');
				
		});

		let moedas= null;

			switch(parseInt(acao.quantidade)){
				case 1: moedas = -3 * acao.quantidade; break;
				case 2: moedas = -2 * acao.quantidade; break;
				case 3: moedas = -1 * acao.quantidade; break;
				case 5: moedas = -1 * acao.quantidade; break;
		}
		console.log(moedas);
		console.log(acao.usuario);

		db.collection('jogos').update({usuario: acao.usuario}, {$inc:{moeda: moedas}});
		db.close();
		
	});
}

JogoDAO.prototype.getAcoes = function (usuario, res){
	mongo.connect(url, function(err, db){
		assert.equal(null, err);
		let date = new Date();
		let momento_atual = date.getTime();
		db.collection('acao').find({usuario: usuario, acao_termina_em: {$gt:momento_atual}}).toArray(function(err, result){
			res.render("pergaminhos", {acoes : result});
			
		});
		db.close();
		 

	});
}

module.exports = function (){
	return JogoDAO;
}