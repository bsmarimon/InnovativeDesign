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

Router.route('/graphic', function() {
  this.render('graphic');
});

Router.route('/video', function() {
  this.render('video');
});

Router.route('/web', function() {
  this.render('web');
});

Router.route('/product', function() {
  this.render('product');
});


Router.configure({
  layoutTemplate: 'navbar'
});




