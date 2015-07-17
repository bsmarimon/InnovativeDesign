Router.route('/', function() {
	this.render('landing');
});

Router.route('/officers', function() {
	this.render('officers');
});

Router.route('/image', function() {
	this.render('imageUpload');
});

Router.route('/submission', function() {
	this.render('content');
});

Router.route('/contact', function() {
	this.render('contact');
});

Router.route('/teams', function() {
	this.render('teams');
});
