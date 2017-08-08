var mongo = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/got';


function UsuarioDAO(){
	//this._connection = connection();
}

UsuarioDAO.prototype.inserirUsuario = function(usuario) {
	mongo.connect(url, function(err, db){
		assert.equal(null, err);
		db.collection('usuarios').insertOne(usuario, function(err, result){
			assert.equal(null, err);
			console.log('Usuario Cadastrado');
			db.close();
		});
	});

}


UsuarioDAO.prototype.autenticar = function (usuario, req, res){
	mongo.connect(url, function(err, db){
		assert.equal(null, err);
		db.collection('usuarios').find(usuario).toArray(function(err, result){
			if(result[0] != undefined){
				
				req.session.autorizado = true;

			}
		});

	});

	console.log(usuario);
}
module.exports = function(){
	return UsuarioDAO;
}

