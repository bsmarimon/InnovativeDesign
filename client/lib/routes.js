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

Router.route('/members', function() {
  this.render('members');
});

Router.route('/alumni', function() {
  this.render('alumni');
});

Router.route('/events', function() {
  this.render('events');
});

Router.route('/club', function() {
  this.render('club');
});

Router.route('/request', function() {
  this.render('requestFix');
});

Router.route('/decal', function() {
  this.render('decal');
});

Router.route('/thanks', function() {
  this.render('thankyou');
});

Router.route('/decal/lesson/1', function() {
  this.render('lesson1');
});

Router.route('/decal/lesson/2', function() {
  this.render('lesson2');
});

Router.route('/decal/lesson/3', function() {
  this.render('lesson3');
});

Router.route('/decal/lesson/4', function() {
  this.render('lesson4');
});

Router.route('/decal/lesson/5', function() {
  this.render('lesson5');
});

Router.route('/decal/lesson/6', function() {
  this.render('lesson6');
});

Router.route('/decal/lesson/7', function() {
  this.render('lesson7');
});

Router.route('/decal/lesson/8', function() {
  this.render('lesson8');
});

Router.route('/decal/lesson/9', function() {
  this.render('lesson9');
});

Router.route('/decal/lesson/10', function() {
  this.render('lesson10');
});

Router.route('/decal/lesson/11', function() {
  this.render('lesson11');
});

Router.configure({
  layoutTemplate: 'navbar'
});
