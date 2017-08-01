var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 

var connMongoDb = function(){

// Connection URL 
var url = 'mongodb://localhost:27017/got';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Conectou ao Servidor!!!");
 

});	

}
module.exports = function(){
	

	return connMongoDb;
}