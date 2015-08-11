Router.route('/', function() {
	this.render('landing');
});

Router.route('/officers', function() {
	this.render('officers');
});

Router.route('/about', function() {
  this.render('about');
});

Router.route('/contact', function() {
	this.render('contact');
});

Router.route('/teams', function() {
	this.render('teams');
});

Router.route('/photo', function() {
  this.render('photo');
});


Options.set('forbidClientAccountCreation', true);



