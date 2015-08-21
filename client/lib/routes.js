// I Tend To Think Too Deeply
// 
// My friend was eating an orange,
// So I asked him, 
// Is the fruit called an orange
// Because it is the color orange?
// Or is the color called orange,
// Because the fruit is orange?
// 
// He said,
// This is a tangerine.
//
// #PoetryTier
// #PoemsFromKidsIHadEnglishWith
// #ThisIsABoringFile

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

Router.route('/decal', function() {
  this.render('decal');
});

Router.configure({
  layoutTemplate: 'navbar'
});




