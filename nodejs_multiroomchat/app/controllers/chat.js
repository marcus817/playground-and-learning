module.exports.iniciaChat = function(aplication, req, res){
	
	var dadosForm = req.body;
	req.assert('apelido', 'Nome ou apelido OBRIGATÓRIO').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		res.render('index', {validacao : erros})
		return;
	}

	aplication.get('io').emit(
		'msgParaCliente',
		{apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat'}

		);

	aplication.get('io').emit(
		'participantesParaCliente',
		{apelido: dadosForm.apelido}
		);
	

	res.render('chat', {dadosForm : dadosForm});

}