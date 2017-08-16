var mongo = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/got';


function JogoDAO(){
	//this._connection = connection();
}


JogoDAO.prototype.iniciarJogo = function(res, usuario, casa, comando_invalido){
	mongo.connect(url, function(err, db){
		assert.equal(null, err);
		db.collection('jogos').find({usuario: usuario}).toArray(function(err, result){
			console.log(result);
			res.render('jogo',{img_casa: casa, jogo: result[0], comando_invalido : comando_invalido});
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

module.exports = function (){
	return JogoDAO;
}