module.exports.index = function(app, req, res){

	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.noticiasDAO(connection);
		
	noticiasModel.getTopFiveNoticias(function(error, result){
		console.log(result);
		res.render("home/index", {noticias : result});
	});	

	}
	