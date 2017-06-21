var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password:'',
		database: 'node'
	});
	console.log('Conexão Realizada');
}

module.exports = function () {
	return connMySQL;
	console.log('Conexão Invocada!');
}