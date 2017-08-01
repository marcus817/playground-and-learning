module.exports.cadastro = function(application, req, res){
	res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res){
	var dadosForm = req.body;
	req.assert('nome', 'Nome não pode ser Vazio').notEmpty();
	req.assert('usuario', 'Usuario não pode ser Vazio').notEmpty();
	req.assert('senha', 'Senha não pode ser Vazio').notEmpty();
	req.assert('casa', 'Casa deve ser selecionada').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('cadastro', {validacao: erros, dadosForm: {}});
		return;
	}

	//var db = application.config.dbConnection;
	//console.log(db);
	var UsuarioDAO = new application.app.models.UsuarioDAO();
	UsuarioDAO.inserirUsuario(dadosForm);

	
	res.send('Pronto para Cadastrar');


}
	