Router.route('/', function() {
	this.render('landing');
});

Router.route('/officers', function() {
	this.render('officers');
});

Router.route('/image', function() {
	this.render('imageUpload');
});
