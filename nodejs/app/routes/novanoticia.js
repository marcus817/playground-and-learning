module.exports = function(app){

	app.get('/novanoticia', function(req, res){
		res.render('admin/form_add_noticia');
	});

};